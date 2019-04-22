import React from "react";
import styled from "styled-components";
import css from "./styles";

import * as utils from "../mobileUtils";

export default props => {
  let propsClone = Object.assign({}, props);
  const defaultProps = {
    type: "text",
    editable: true
  };
  const wProps = { ...defaultProps, ...utils.getWebProps(propsClone) };
  const styledFunc = props.multiline ? styled.textarea : styled.input;
  const TextInput = styledFunc`
    ${css} ${utils.getWebStyles(props.style)};
  `;

  return <TextInput {...wProps} />;
};
