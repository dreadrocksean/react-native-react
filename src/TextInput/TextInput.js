import React from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

import css from "./styles";
import * as utils from "../mobileUtils";

const defaultProps = {
  variant: "standard"
};

export default props => {
  let propsClone = Object.assign({}, props);
  const { style, ...restProps } = { ...defaultProps, ...propsClone };
  const wProps = utils.getWebProps(restProps);
  const wStyles = utils.getWebStyles({ ...css, ...style });
  const inputProps = { InputProps: { style: wStyles } };
  const allProps = { ...wProps, ...inputProps };

  const styledFunc = props.multiline ? styled.textarea : styled(TextField);
  // console.log("css: ", css);
  const TextInput = styledFunc`
    ${css} ${wStyles};
  `;

  return <TextField {...allProps} />;
};
