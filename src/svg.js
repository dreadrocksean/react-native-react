import React, { Component, PureComponent } from "react";
import { Path, Line, G } from "react-native-svg";
import { Svg } from "expo";
import HTML from "react-native-render-html";

export const removeEmptySpace = str => {
  const regex = /\r?\n|\r|\s*/g;
  return str.replace(regex, "");
};

const SvgUtils = function(svg) {
  const getMatchingElements = (svg, cls) => {
    // Needs to accomodate strings which remain unescaped.
    const regexEscape = string =>
      string.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    const className = cls.replace(".", "");
    /* An example of the unescaped regex where "cls-2" is the classname AS IS.
    /<[a-zA-Z]+[\s\r\n\t]+class=("|')((cls-2)|([a-zA-Z\-\d\s]*cls-2))[^(\/>)]*\/>/g;
    */

    // Eventually use this.getMatchingElements(svg, className)
    const escapedMatchString = `<\[a\-zA\-Z\]\+\[\\s\\r\\n\\t\]\+class=\("\|'\)\(\(${className}\)\|\(\[a\-zA\-Z\\\-\\d\\s\]\*${className}\)\)\[\^\(\\/>\)\]\*\\/>`;
    let regex = new RegExp(escapedMatchString, "g");
    return svg.match(regex);
  };
  const cssToAttribute = css => {
    const regex = /([[a-zA-Z\-\d]+):([#a-zA-Z\d.]+);/;
    const a = css.map(v => {
      return v.replace(regex, ($0, $1, $2, $3) => {
        return $1 + "=" + "'" + $2 + "'";
      });
    });
    return a;
  };
  const addAttributes = (els, css) => {
    const attr = cssToAttribute(css);
    const regex = /class="[a-zA-Z\-\d]+"/;
    return els.map(el => {
      return el.replace(regex, attr.join(" "));
    });
  };
  const getStyles = svg => {
    const regex = /(\.[a-z]+[\w-]*,?\s?)+\{[\n\r\t\s\w:;#\-\.]*\}/g;
    return svg.match(regex).map(v => removeEmptySpace(v));
  };
  const toCSSValueArray = str => {
    const regex = /[\w:#\-\.]*;/g;
    return str.match(regex);
  };
  const toCSSKeyArray = str => {
    const regex = /(\.[a-zA-Z][\w\-]*)/g;
    return str.match(regex);
  };
  const toCSSObjectArray = svg => {
    const cssObject = {};
    getStyles(svg).forEach(style => {
      toCSSKeyArray(style).forEach(k => {
        cssObject[k] = cssObject[k]
          ? [...cssObject[k], ...toCSSValueArray(style)]
          : toCSSValueArray(style);
      });
    });
    return cssObject;
  };

  this.svg = svg;
  this.svgScale = null;
  this.aspectRatio = null;
  this.getSvg = () => this.svg;
  this.getScale = () => this.svgScale;
  this.getaspectRatio = () => this.svgaspectRatio;

  this.convertClassesToAttrs = () => {
    let newSvg = this.svg;
    const cssObject = toCSSObjectArray(svg);
    Object.keys(cssObject).forEach(k => {
      const matchingElements = getMatchingElements(svg, k);
      const withAttrs = addAttributes(matchingElements, cssObject[k]);
      matchingElements.forEach((el, i) => {
        newSvg = newSvg.replace(el, withAttrs[i]);
      });
    });
    this.svg = newSvg;
    return this;
  };

  this.addDimensions = width => {
    const scale = null;
    const regex = /(viewBox=("|')([\d\.\d]+\s){2})([\d\.]+)\s([\d\.]+)("|')/;
    this.svg = this.svg.replace(regex, ($0, $1, $2, $3, $4, $5) => {
      this.svgScale = (width || $4) / $4;
      this.aspectRatio = $4 / $5;
      return `${$1}${$4} ${$5}" width="${$4 * this.svgScale}" height="${$5 *
        this.svgScale}" preserveAspectRatio="xMidYMid meet"`;
    });
    return this;
  };

  this.tagsToTitleCase = () => {
    const regex = /(<\/?)(\w)/g;
    this.svg = this.svg.replace(
      regex,
      (_, a, b, c) => `${a}${b.toUpperCase()}`
    );
    return this;
  };

  this.removeDefs = () => {
    // return svg; // Uncomment if Defs are ever required in design
    const regex = /<Defs>(.|[\r\n])*<\/Defs>/;
    this.svg = this.svg.replace(regex, () => "");
    return this;
  };

  this.removeTitle = () => {
    const regex = /<Title>(.|[\r\n])*<\/Title>/;
    this.svg = this.svg.replace(regex, () => "");
    return this;
  };
};

export default class NativeSVG extends Component {
  convertSvg(svg) {
    const svgUtils = new SvgUtils(svg);
    return svgUtils
      .convertClassesToAttrs()
      .tagsToTitleCase()
      .addDimensions(this.props.width)
      .removeDefs()
      .removeTitle();
  }

  updateColor(attrs, fillColor, strokeColor) {
    if (fillColor && attrs.fill !== "none") {
      attrs.fill = fillColor;
    }
    if (strokeColor && attrs.stroke) {
      attrs.stroke = strokeColor;
    }
    return attrs;
  }

  snakeToCamel(attrs) {
    const regex = /([a-z]+)-([a-z])([a-z]+)/;
    const newAttrs = {};
    Object.keys(attrs).forEach(k => {
      if (regex.test(k)) {
        const newKey = k.replace(
          regex,
          ($0, $1, $2, $3) => $1 + $2.toUpperCase() + $3
        );
        newAttrs[newKey] = attrs[k];
      } else {
        newAttrs[k] = attrs[k];
      }
    });
    return newAttrs;
  }

  getNewAttrs(attrs, passProps) {
    const camelized = this.snakeToCamel(attrs);
    const filled = this.updateColor(
      camelized,
      this.props.fillColor,
      this.props.strokeColor
    );
    return { ...filled, key: passProps.key };
  }

  render() {
    const convertedSvgUtils = this.convertSvg(this.props.svg);
    return (
      <HTML
        html={convertedSvgUtils.getSvg()}
        renderers={{
          svg: (attrs, children, _, passProps) => {
            const newAttrs = { ...attrs, key: passProps.key };
            return (
              <Svg {...newAttrs}>
                <G scale={convertedSvgUtils.getScale()}>{children}</G>
              </Svg>
            );
          },
          path: (attrs, a, b, passProps) => {
            return <Path {...this.getNewAttrs(attrs, passProps)} />;
          },
          line: (attrs, a, b, passProps) => {
            return <Line {...this.getNewAttrs(attrs, passProps)} />;
          },
          circle: (attrs, a, b, passProps) => {
            return <Circle {...this.getNewAttrs(attrs, passProps)} />;
          },
          rect: (attrs, a, b, passProps) => {
            return <Rect {...this.getNewAttrs(attrs, passProps)} />;
          }
        }}
      />
    );
  }
}
