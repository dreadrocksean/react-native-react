import React from "react";
import styled from "styled-components";
import css from "./styles";

import * as utils from "../mobileUtils";

const Button = props => {
  const styles = {
    color: props.color || "#006bff",
    backgroundColor: "transparent",
    fontSize: "20px",
    border: "none",
    marginVertical: 10
  };
  const WButton = styled.button`
    ${css}${utils.getWebStyles(styles)};
  `;

  let wProps = {
    type: "button",
    onClick: props.onPress,
    disabled: props.disabled
  };
  // delete wPro.children;
  return <WButton {...wProps}>{props.title}</WButton>;
};

export default Button;
