import React, { PureComponent } from "react";
import styled from "styled-components";
import css from "./styles";

import * as utils from "../mobileUtils";

export default class extends PureComponent {
  ScrollView = styled.div`
    ${css} ${utils.getWebStyles(this.props.style)};
  `;
  propsClone = Object.assign({}, this.props);

  render() {
    delete this.propsClone.onPress;
    return (
      <this.ScrollView {...utils.getWebProps(this.propsClone)}>
        {[...this.props.children].map((v, i) => {
          return React.cloneElement(v, { key: i, scrollable: true });
        })}
      </this.ScrollView>
    );
  }
}
