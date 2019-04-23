import React, { Component } from "react";
import styled from "styled-components";
import css from "./styles";

import * as utils from "../mobileUtils";

export default class extends Component {
  state = {
    show: true
  };
  top = 0;

  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   if (!snapshot.show) {
  //     this.setState({ show: false });
  //   }
  // }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   return { show: this.isInViewport() };
  // }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate = () => {
    this.setState({ show: this.isInViewport() });
  };

  isInViewport = () => {
    if (!this.el) return false;
    // return true;
    // console.log("scrollable: ", this.props.scrollable);
    this.top = this.el.getBoundingClientRect().top || this.top;
    return (
      this.props.scrollable || (this.top >= 0 && this.top <= window.innerHeight)
    );
  };

  View = styled.div`
    ${css} ${utils.getWebStyles(this.props.style)};
  `;

  render() {
    const { show } = this.state;

    let propsClone = Object.assign({}, this.props);
    delete propsClone.onPress;

    if (!show) {
      propsClone.children = [];
    }

    // console.log("show: ", show);
    // console.log("children: ", this.props.children);
    return (
      <this.View
        ref={el => (this.el = el)}
        {...utils.getWebProps(propsClone)}
        style={{
          display: show ? "flex" : "none",
          maxHeight: window.innerHeight - this.top
        }}
      >
        {[...propsClone.children].map((v, i) => {
          return React.cloneElement(v, {
            key: i,
            scrollable: this.props.scrollable
          });
        })}
      </this.View>
    );
  }
}
