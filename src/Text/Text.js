import React from "react";
import styled from "styled-components";
import css from "./styles";

import * as utils from "../mobileUtils";

export default props => {
  let propsClone = Object.assign({}, props);
  const wProps = utils.getWebProps(propsClone);
  const WText = styled.p`
    ${css} ${utils.getWebStyles(props.style, "Text")};
  `;

  return <WText {...wProps} children={wProps.transfunc(props.children)} />;
};
