import React from "react";
import styled from "styled-components";
import css from "./styles";

import * as utils from "../mobileUtils";

const Image = props => {
  const WImage = styled.img`
    ${css}${utils.getWebStyles(props.styles)};
  `;

  return <WImage {...utils.getWebProps(props)} />;
};

export default Image;
