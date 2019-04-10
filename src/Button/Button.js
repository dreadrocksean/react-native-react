import React from "react";
import styled from "styled-components";
import css from "./styles";

import * as utils from "../mobileUtils";

const Button = props => {
  const WButton = styled.button`
    ${css}${utils.getWebStyles(props.styles)};
  `;

  let propsClone = Object.assign({}, props);
  delete propsClone.onPress;
  return <WButton {...utils.getWebProps(propsClone)} />;
};

export default Button;
