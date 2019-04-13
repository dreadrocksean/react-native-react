import React from "react";
import styled from "styled-components";
import css from "./styles";

import * as utils from "../mobileUtils";

const Button = props => {
  const WButton = styled.button`
    ${css}${utils.getWebStyles(props.style)};
  `;

  let propsClone = Object.assign({}, props);
  delete propsClone.children;
  return <WButton {...utils.getWebProps(propsClone)}>{props.title}</WButton>;
};

export default Button;
