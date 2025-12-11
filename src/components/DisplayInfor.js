import React from "react";

class DisplayInfor extends React.Component {
  render() {
    //destructuring array/object
    const { age, name } = this.props; //object
    return (
      <div>
        <div>My name's {name}</div>
        <div>My name's {age}</div>
      </div>
    );
  }
}
export default DisplayInfor;
