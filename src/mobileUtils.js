import { hexToRGBA, flattenObject } from "./utils";

const webPropMap = {
  onPress: "onClick"
};
const webStyleMap = {
  borderLeft: "border-left",
  paddingHorizontal: ["padding-left", "padding-right"],
  paddingVertical: ["padding-top", "padding-bottom"],
  marginHorizontal: ["margin-left", "margin-right"],
  marginVertical: ["margin-top", "margin-bottom"],
  shadowColor: { "box-shadow": 4 },
  shadowOffset: { "box-shadow": { width: 0, height: 1 } },
  shadowOpacity: { "box-shadow": { opacity: "shadowColor" } },
  shadowRadius: { "box-shadow": 3 },
  elevation: { "box-shadow": 2 }
};

const defaultShorthand = {
  "box-shadow": [0, 0, 0, 0, "#000"]
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
  let mProps = { transfunc: arg => arg };
  Object.keys(propsClone).map(
    prop => (mProps[webPropMap[prop] || prop] = propsClone[prop])
  );
  return mProps;
};

export const getWebStyles = mStyles => {
  if (!mStyles) {
    return;
  }
  const shorthandMStyleGroups = getGroups(mStyles);
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
    (acc, k) => ({ ...acc, ...convertToWebStyle(noShorthandMStyles, k) }),
    {}
  );
  Object.keys(shorthandMStyleGroups || {}).forEach(k => {
    wStyles = {
      ...wStyles,
      ...convertToWebShorthandStyle(shorthandMStyleGroups, k)
    };
  });
  return wStyles;
};

const convertToWebShorthandStyle = (groups, wk) => {
  const group = groups[wk];
  const valArray = Object.keys(group).reduce((acc, mk) => {
    acc = defaultShorthand[wk];
    if (group[mk].constructor === Object) {
      Object.keys(group[mk]).forEach(vk => {
        const val = group[mk][vk];
        const pos = webStyleMap[mk][wk][vk];
        acc[pos] = val;
      });
    } else {
      const pos = webStyleMap[mk][wk];
      if (pos.constructor === Object) {
        const key = Object.keys(pos)[0];
        const targetPos = webStyleMap[pos[key]][wk];
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
  }, []);
  return {
    [wk]: Array.apply(null, valArray)
      .map(v => {
        return v >= 1 ? v + "px" : v || 0;
      })
      .join(" ")
  };
};

const getGroups = mStyles => {
  let uniqueWKeys = [];
  let shortHandCandidates = {};
  for (const k of Object.keys(mStyles)) {
    const mapKey = webStyleMap[k];
    if (!mapKey || mapKey.constructor !== Object) continue;
    const wKey = (Object.keys(webStyleMap[k]) || [])[0]; //
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

const convertToWebStyle = (mStyles, k) => {
  if (!webStyleMap[k]) {
    return { [k]: mStyles[k] };
  }
  const wKey = webStyleMap[k];
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
  return { [webStyleMap[k]]: mStyles[k] };
};
