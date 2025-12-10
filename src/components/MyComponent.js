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

  handleOnChangeInput = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.prevenDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        my name is {this.state.name} and I'm {this.state.age}
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            onChange={(event) => this.handleOnChangeInput(event)}
          ></input>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default MyComponent;
