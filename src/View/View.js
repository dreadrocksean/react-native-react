import React from "react";
import styled from "styled-components";
import css from "./styles";

import * as utils from "../mobileUtils";

const View = props => {
  const WView = styled.div`
    ${css} ${utils.getWebStyles(props.styles)};
  `;

  let propsClone = Object.assign({}, props);
  delete propsClone.onPress;
  return <WView {...utils.getWebProps(propsClone)} />;
};

export default View;
