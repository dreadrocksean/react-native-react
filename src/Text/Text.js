import React from "react";
import styled from "styled-components";
import css from "./styles";

import * as utils from "../mobileUtils";

export default props => {
  let propsClone = Object.assign({}, props);
  delete propsClone.onPress;
  const wProps = utils.getWebProps(propsClone);
  const WText = styled.p`
    ${css} ${utils.getWebStyles(props.styles)};
  `;

  return <WText {...wProps} children={wProps.transfunc(props.children)} />;
};
