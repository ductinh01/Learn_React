// class component
// function component

import { toContainHTML } from "@testing-library/jest-dom/dist/matchers";
import React from "react";
import UserInfor from "./Userinfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
  state = {
    listUser: [
      { id: 1, name: "tam", age: "30" },
      { id: 2, name: "Huyen", age: "27" },
      { id: 3, name: "Nhung", age: "27" },
    ],
  };

  render() {
    return (
      <div>
        <UserInfor></UserInfor>
        <DisplayInfor listUser={this.state.listUser}></DisplayInfor>
      </div>
    );
  }
}

export default MyComponent;
