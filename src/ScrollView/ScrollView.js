import React, { PureComponent } from "react";
import styled from "styled-components";
import css from "./styles";

import * as utils from "../mobileUtils";

export default class extends PureComponent {
  state = { maxHeight: "inherit" };
  top = 0;

  ScrollView = styled.div`
    ${css} ${utils.getWebStyles(this.props.style)};
  `;
  propsClone = Object.assign({}, this.props);

  componentDidMount() {
    if (!this.props.isChild) return;
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate = () => {
    if (!this.el) return;
    this.top = this.el.getBoundingClientRect().top || this.top;
    this.setState({
      maxHeight: window.innerHeight - this.top
    });
  };

  render() {
    delete this.propsClone.onPress;
    return (
      <this.ScrollView
        ref={el => (this.el = el)}
        {...utils.getWebProps(this.propsClone)}
        style={{
          maxHeight: this.state.maxHeight
        }}
      >
        {[...this.props.children].map((v, i) => {
          return React.cloneElement(v, {
            key: i,
            scrollable: true,
            isChild: true
          });
        })}
      </this.ScrollView>
    );
  }
}
