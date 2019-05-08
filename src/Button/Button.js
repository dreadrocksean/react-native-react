import React from "react";
import styled from "styled-components";

import css from "./styles";

import * as utils from "../mobileUtils";

const Button = props => {
  const color = props.disabled ? "grey" : props.color || "#006bff";
  const styles = {
    color,
    backgroundColor: "transparent",
    fontSize: "20px",
    border: "none",
    marginVertical: 10
  };
  const defaultProps = { type: "button" };

  const WButton = styled.button`
    ${css}${utils.getWebStyles(styles)};
  `;
  let wProps = { ...defaultProps, ...utils.getWebProps(props) };
  return <WButton {...wProps}>{props.title}</WButton>;
};

export default Button;
