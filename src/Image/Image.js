import React from "react";
import styled from "styled-components";
import css from "./styles";

import * as utils from "../mobileUtils";

export default props => {
  const WImage = styled.img`
    ${css}${utils.getWebStyles(props.style)};
  `;

  let propsClone = Object.assign({}, props);
  delete propsClone.onPress;
  return <WImage {...utils.getWebProps(propsClone)} />;
};
