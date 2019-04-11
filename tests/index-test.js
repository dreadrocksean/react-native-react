import expect from "expect";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";

import { Text } from "src/";

describe("Text Component", () => {
  test("renders", () => {
    const wrapper = shallow(<Text />);
    expect(wrapper.exists()).toBe(true);
  });
});
