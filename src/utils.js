export const hexToRGBA = (hex, opacity) => {
  hex = hex.replace("#", "");
  const mul = hex.length / 3;
  const rbg = hex.split("").reduce((acc, v, i) => {
    if (mul === 1 || i % mul === 1) {
      const pos = mul === 1 ? i : i - 1;
      const hexSub = hex.substring(pos, pos + mul);
      const decVal = parseInt(hexSub, 16);
      acc[Math.floor(i / mul)] = mul === 1 ? decVal * 17 : decVal;
    }
    return acc;
  }, []);

  return `rgba(${rbg[0]},${rbg[1]},${rbg[2]},${opacity})`;
};

export const flattenObject = (obj, level = 0) => {
  return Object.assign(
    {},
    ...(function _flatten(o, currLevel) {
      return [].concat(
        ...Object.keys(o).map(
          k =>
            o[k].constructor === Object && currLevel < level
              ? _flatten(o[k], ++currLevel)
              : { [k]: o[k] }
        )
      );
    })(obj, 0)
  );
};

const isClassComponent = component => {
  return typeof component === "function" &&
    !!component.prototype.isReactComponent
    ? true
    : false;
};

const isFunctionComponent = component => {
  return typeof component === "function" &&
    String(component).includes("return React.createElement")
    ? true
    : false;
};

const isReactComponent = component => {
  return isClassComponent(component) || isFunctionComponent(component)
    ? true
    : false;
};

const isElement = element => {
  return React.isValidElement(element);
};

const isDOMTypeElement = element => {
  return isElement(element) && typeof element.type === "string";
};

const isCompositeTypeElement = element => {
  return isElement(element) && typeof element.type === "function";
};
