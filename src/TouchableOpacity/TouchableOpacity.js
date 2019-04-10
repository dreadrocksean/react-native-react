import React from "react";
import styled from "styled-components";
import css from "./styles";

import * as utils from "../mobileUtils";

const TouchableOpacity = props => {
  const Div = styled.div`
    ${css}${utils.getWebStyles(props.styles)};
  `;

  return <Div {...utils.getWebProps(props)} />;
};

export default TouchableOpacity;
