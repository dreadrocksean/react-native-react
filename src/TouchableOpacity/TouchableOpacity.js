import React from "react";
import styled from "styled-components";
import css from "./styles";

import * as utils from "../mobileUtils";

const TouchableOpacity = props => {
  const Div = styled.div`
    ${css}${utils.getWebStyles(props.style)};
  `;

  return (
    <Div {...utils.getWebProps(props)}>
      {[...props.children].map((v, i) => {
        return React.cloneElement(v, {
          key: i,
          scrollable: props.scrollable,
          isChild: props.isChild
        });
      })}
    </Div>
  );
};

export default TouchableOpacity;
