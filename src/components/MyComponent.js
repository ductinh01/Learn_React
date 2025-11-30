// class component
// function component

import { toContainHTML } from "@testing-library/jest-dom/dist/matchers";
import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Tinh",
    adress: "Da Nang",
    age: 24,
  };
  render() {
    return <div>my name is {this.state.name}</div>;
  }
}

export default MyComponent;
