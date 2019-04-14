import React from "react";
import styled from "styled-components";
import css from "./styles";

import * as utils from "../mobileUtils";

const ScrollView = props => {
  const WScrollView = styled.div`
    ${css} ${utils.getWebStyles(props.style)};
  `;

  let propsClone = Object.assign({}, props);
  delete propsClone.onPress;
  return (
    <WScrollView {...utils.getWebProps(propsClone)}>
      {[...propsClone.children].map((v, i) => {
        return React.cloneElement(v, { key: i, scrollable: true });
      })}
    </WScrollView>
  );
};

export default ScrollView;
