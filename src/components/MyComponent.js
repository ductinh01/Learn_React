// class component
// function component

import { toContainHTML } from "@testing-library/jest-dom/dist/matchers";
import React from "react";
import UserInfor from "./Userinfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
  render() {
    const myAge = 30;
    return (
      <div>
        <UserInfor></UserInfor>
        <DisplayInfor name="Tam" age={myAge}></DisplayInfor>
        <br></br>
        <DisplayInfor name="Nhung" age="27"></DisplayInfor>
      </div>
    );
  }
}

export default MyComponent;
