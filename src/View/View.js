import React from "react";
import styled from "styled-components";
import css from "./styles";

import * as utils from "../mobileUtils";

export default class extends React.PureComponent {
  state = {
    show: true
  };

  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate = () => {
    this.setState({ show: this.isInViewport() });
  };

  isInViewport = () => {
    // return true;
    console.log("scrollable: ", this.props.scrollable);
    if (!this.el) return false;
    const top = this.el.getBoundingClientRect().top;
    return this.props.scrollable || (top >= 0 && top <= window.innerHeight);
  };

  render() {
    const { show } = this.state;
    const WView = styled.div`
      ${css} ${utils.getWebStyles(this.props.style)};
    `;

    let propsClone = Object.assign({}, this.props);
    delete propsClone.onPress;
    console.log("show: ", show);
    console.log("children: ", this.props.children);
    return show ? (
      <WView ref={el => (this.el = el)} {...utils.getWebProps(propsClone)}>
        {[...propsClone.children].map((v, i) => {
          return React.cloneElement(v, {
            key: i,
            scrollable: this.props.scrollable
          });
        })}
      </WView>
    ) : null;
  }
}
