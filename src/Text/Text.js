import React from "react";
import styled from "styled-components";
import css from "./styles";

import * as utils from "../mobileUtils";

export default props => {
  let propsClone = Object.assign({}, props);
  const wProps = utils.getWebProps(propsClone);
  const noStyle = {
    color: "#000"
  };
  const WText = styled.p`
    ${css} ${noStyle} ${utils.getWebStyles(props.style, "Text")};
  `;

  const children =
    (wProps.transfunc || (() => {}))(props.children) || props.children;
  return <WText {...wProps} children={children} />;
};
