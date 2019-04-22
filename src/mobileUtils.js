import { hexToRGBA, flattenObject } from "./utils";

const webPropMap = {
  onPress: "onClick",
  source: "src"
};
const webStyleMap = compType => {
  const shadow = compType === "Text" ? "text-shadow" : "box-shadow";
  const colorPos = compType === "Text" ? 3 : 4;
  const radiusPos = compType === "Text" ? 2 : 3;
  let map = {
    borderLeft: "border-left",
    paddingHorizontal: ["padding-left", "padding-right"],
    paddingVertical: ["padding-top", "padding-bottom"],
    marginHorizontal: ["margin-left", "margin-right"],
    marginVertical: ["margin-top", "margin-bottom"],
    shadowOffset: { [shadow]: { width: 0, height: 1 } },
    elevation: { [shadow]: 2 },
    shadowRadius: { [shadow]: radiusPos },
    shadowColor: { [shadow]: colorPos },
    shadowOpacity: { [shadow]: { opacity: "shadowColor" } }
  };
  if (compType === "Text") {
    delete map.elevation;
  }
  return map;
};

const defaultShorthand = {
  "box-shadow": [0, 0, 0, 0, "#000"],
  "text-shadow": [0, 0, 0, "#000"]
};

export const defaultStyles = `
  display: flex;
  flex-direction: column;
`;

export const getWebProps = props => {
  let propsClone = Object.assign({}, props);
  if (Object.keys(propsClone).includes("transfunc") && !propsClone.transfunc) {
    console.error("transfunc is undefined");
    delete propsClone.transfunc; // Can't delete from immutable "props"
  }
  let mProps = {};
  // let mProps = { transfunc: arg => arg };
  Object.keys(propsClone).map(
    prop => (mProps[webPropMap[prop] || prop] = propsClone[prop])
  );
  return mProps;
};

export const getWebStyles = (mStyles, compType = "View") => {
  if (!mStyles) {
    return;
  }
  const shorthandMStyleGroups = getGroups(mStyles, compType);
  const flattenedGroupObject =
    shorthandMStyleGroups && flattenObject(shorthandMStyleGroups, 1);
  const noShorthandMStyles = shorthandMStyleGroups
    ? Object.keys(mStyles).reduce((acc, v) => {
        if (typeof flattenedGroupObject[v] === "undefined") {
          acc[v] = mStyles[v];
        }
        return acc;
      }, {})
    : mStyles;
  let wStyles = Object.keys(noShorthandMStyles).reduce(
    (acc, k) => ({
      ...acc,
      ...convertToWebStyle(noShorthandMStyles, k, compType)
    }),
    {}
  );
  Object.keys(shorthandMStyleGroups || {}).forEach(k => {
    wStyles = {
      ...wStyles,
      ...convertToWebShorthandStyle(shorthandMStyleGroups, k, compType)
    };
  });
  return wStyles;
};

const convertToWebShorthandStyle = (groups, wk, compType) => {
  const group = groups[wk];
  const valArray = Object.keys(group).reduce((acc, mk) => {
    acc = acc || defaultShorthand[wk];
    if (group[mk].constructor === Object) {
      Object.keys(group[mk]).forEach(vk => {
        const val = group[mk][vk];
        const pos = webStyleMap(compType)[mk][wk][vk];
        acc[pos] = val;
      });
    } else {
      const pos = webStyleMap(compType)[mk][wk];
      if (pos.constructor === Object) {
        const key = Object.keys(pos)[0];
        const targetPos = webStyleMap(compType)[pos[key]][wk];
        switch (key) {
          case "opacity":
            {
              const color = group[pos[key]] || acc[targetPos];
              const rgba =
                color.charAt(0) === "#" ? hexToRGBA(color, group[mk]) : color;
              acc[targetPos] = rgba;
            }
            break;
          default:
            acc[targetPos] = group[pos[key]];
        }
      } else {
        acc[pos] = group[mk];
      }
    }
    return acc;
  }, null);
  return {
    [wk]: Array.apply(null, valArray)
      .map(v => {
        return v >= 1 ? v + "px" : v || 0;
      })
      .join(" ")
  };
};

const getGroups = (mStyles, compType) => {
  let uniqueWKeys = [];
  let shortHandCandidates = {};
  for (const k of Object.keys(mStyles)) {
    const mapKey = webStyleMap(compType)[k];
    if (!mapKey || mapKey.constructor !== Object) continue;
    const wKey = (Object.keys(webStyleMap(compType)[k]) || [])[0]; //
    if (wKey && !uniqueWKeys.includes(wKey)) {
      uniqueWKeys.push(wKey);
    }
    if (!shortHandCandidates[wKey]) {
      shortHandCandidates[wKey] = { [k]: mStyles[k] };
    } else {
      shortHandCandidates[wKey][k] = mStyles[k];
    }
  }
  return Object.keys(shortHandCandidates).length ? shortHandCandidates : null;
};

const convertToWebStyle = (mStyles, k, compType) => {
  if (!webStyleMap(compType)[k]) {
    return { [k]: mStyles[k] };
  }
  const wKey = webStyleMap(compType)[k];
  const mVal = mStyles[k];

  if (wKey.constructor === Array) {
    return wKey.reduce((acc, wk) => {
      acc[wk] = mVal;
      return acc;
    }, {});
  } else if (wKey.constructor === Object) {
    const oKey = Object.keys(wKey)[0];
    const positions = wKey[oKey];
    let vals = [];
    positions.forEach((pos, i) => {
      vals[pos] =
        mVal.constructor === Object ? mVal[Object.keys(mVal)[pos]] : mVal;
    });
    const valStr = vals.map(v => v || 0).join("'");
    return { [wKey]: valStr };
  }
  return { [webStyleMap(compType)[k]]: mStyles[k] };
};
