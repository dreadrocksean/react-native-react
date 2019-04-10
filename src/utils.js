export const hexToRGBA = (hex, opacity) => {
  hex = hex.replace("#", "");
  const mul = hex.length / 3;
  const rbg = hex.split("").reduce((acc, v, i) => {
    if (mul === 1 || i % mul === 1) {
      const pos = mul === 1 ? i : i - 1;
      acc[Math.floor(i / mul)] = parseInt(hex.substring(pos, pos + mul), 16);
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
