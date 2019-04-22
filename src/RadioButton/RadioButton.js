import React from "react";
import styled from "styled-components";
import css from "./styles";

import * as utils from "../mobileUtils";

export default props => {
  let propsClone = Object.assign({}, props);
  const defaultProps = {
    type: "radio"
  };
  const wProps = { ...defaultProps, ...utils.getWebProps(propsClone) };
  const RadioButton = styled.input`
    ${css} ${utils.getWebStyles(props.style)};
  `;

  return <RadioButton {...wProps} />;
};
