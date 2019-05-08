import React, { PureComponent } from "react";
import { withStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

import * as utils from "../mobileUtils";

const underlineStyles = ({
  borderColor,
  borderWidth = 2,
  borderStyle = "solid"
}) => ({
  underline: {
    "&:before": {
      borderBottom: `${borderWidth}px ${borderStyle} ${borderColor}`
    },
    "&:hover:not($disabled):not($focused):not($error):before": {
      borderBottom: `${borderWidth * 1.5}px ${borderStyle} ${borderColor}`
    },
    "&:after": {
      // borderBottom: `${borderWidth * 1.5}px ${borderStyle} blue`
      borderBottomWidth: `${borderWidth * 1.5}px`
    }
  },
  disabled: {},
  focused: {},
  error: {}
});

const outlineStyles = ({
  borderColor,
  borderWidth = 2,
  borderStyle = "solid"
}) => ({
  notchedOutline: {
    borderColor: `${borderColor} !important`,
    borderWidth,
    borderStyle
  }
});

const CustomTextField = ({
  boxType,
  classes,
  value,
  onChange,
  style,
  label,
  placeholder
}) => (
  <TextField
    variant={boxType || "standard"}
    label={label}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
    margin="normal"
    InputLabelProps={{
      classes: {
        root: classes.TextInputLabel
      }
    }}
    InputProps={{
      classes: {
        notchedOutline: classes.notchedOutline,
        underline: classes.underline
      },
      style
    }}
  />
);

const generate = props => {
  const { boxType, onChange, value, styles, label } = props;
  const { TextInputField, TextInputLabel } = styles;
  const { borderColor, borderWidth, borderStyle, ...rest } = TextInputField;
  const backgroundColor =
    boxType === "filled" ? rest.backgroundColor : "transparent";

  preparedRest = { ...utils.getWebStyles(rest), backgroundColor };
  const customStyles =
    boxType === "outlined"
      ? outlineStyles(TextInputField)
      : underlineStyles(TextInputField);
  const preparedStyles = {
    ...customStyles,
    TextInputLabel
  };

  return withStyles(preparedStyles)(CustomTextField);
};

let StyledTextInput = null;
let preparedRest = null;

export default class extends PureComponent {
  render() {
    const { boxType, onChange, value, styles, label } = this.props;
    StyledTextInput = StyledTextInput || generate(this.props);
    return StyledTextInput ? (
      <StyledTextInput
        type="text"
        boxType={boxType}
        onChange={onChange}
        value={value}
        label={label}
        placeholder="Enter Name"
        labelStyles={{ color: "red" }}
        layoutStyles={styles.formElementLayout}
        style={preparedRest}
      />
    ) : null;
  }
}
