import React, { PureComponent } from "react";
import styled from "styled-components";
import css from "./styles";

import { TextInput, RadioButton } from "../index";
import * as utils from "../mobileUtils";

const styledFunc = (type, multiline) => {
  switch (type) {
    case "checkbox":
    case "radio": {
      return styled["input"];
    }
    case "text": {
      return multiline ? styled["textarea"] : styled["input"];
    }
    default:
      return styled[type];
  }
};
const renderStyledComponent = (props, styles) => {
  return styledFunc(props.type, props.multiline)`
    ${styles}
  `;
};

const renderStyledSelect = (props, styles) => {
  const Option = styledFunc("option")``;
  const Select = styledFunc(props.type)`
      ${styles}
    `;
  return (
    <Select value={props.selectedValue} onChange={props.onChange}>
      {props.values.map((v, i) => (
        <Option value={v.value} key={i}>
          {v.label}
        </Option>
      ))}
    </Select>
  );
};

export default class extends PureComponent {
  static defaultProps = {
    editable: "true"
  };

  webProps = utils.getWebProps(this.props);
  wProps = { ...this.defaultProps, ...this.webProps };
  finalStyles = { ...css, ...utils.getWebStyles(this.props.style) };
  StyledComponent = renderStyledComponent(this.props, this.finalStyles);

  render() {
    return this.props.type === "select" ? (
      renderStyledSelect(this.props, this.finalStyles)
    ) : (
      <this.StyledComponent {...this.wProps} value={this.props.value} />
    );
  }
}
