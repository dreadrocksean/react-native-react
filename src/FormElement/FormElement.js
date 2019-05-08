import React, { PureComponent } from "react";
import styled from "styled-components";
import { MenuItem } from "@material-ui/core";

import css from "./styles";

import { RadioButton } from "../";
import CustomTextInput from "./TextInput";
import TextInput from "../TextInput";
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
    <div style={props.layoutStyles}>
      <Select value={props.selectedValue} onChange={props.onChange}>
        {props.values.map((v, i) => (
          <Option value={v.value} key={i}>
            {v.label}
          </Option>
        ))}
      </Select>
    </div>
  );
};

class FormElement extends PureComponent {
  static defaultProps = {
    editable: "true"
  };

  render() {
    let comp;
    const webProps = utils.getWebProps(this.props);
    const propStyles = { ...utils.getWebStyles(this.props.style) };
    const StyledComponent = renderStyledComponent(this.props, propStyles);

    const {
      layoutStyles,
      labelStyles,
      scrollable,
      isChild,
      ...restProps
    } = this.props;
    const { label, value, selectedValue } = restProps;
    switch (this.props.type) {
      case "select":
        {
          comp = renderStyledSelect(restProps, propStyles);
        }
        break;
      case "text":
        {
          comp = <CustomTextInput {...restProps} />;
        }
        break;
      default:
        comp = <StyledComponent {...webProps} value={this.props.value} />;
    }
    return (
      <div>
        <div style={layoutStyles}>
          <div style={labelStyles}>{label}</div>
          {comp}
        </div>
        <div style={labelStyles}>{selectedValue || value}</div>
      </div>
    );
  }
}

export default FormElement;
