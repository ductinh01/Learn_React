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
  handleClick(event) {
    console.log(">> click me my button");
    console.log(event);
  }

  handleOnMoverOver(event) {
    console.log(event.pageX);
  }

  render() {
    return (
      <div>
        my name is {this.state.name}
        <button onClick={this.handleClick}>Click me</button>
        <button onMouseOver={this.handleOnMoverOver}>Hover me</button>
      </div>
    );
  }
}

export default MyComponent;
