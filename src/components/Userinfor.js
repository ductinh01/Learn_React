import React from "react";

class UserInfor extends React.Component {
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

  handleOnChangeInput = (event) => {
    this.setState({
      age: event.target.value,
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
          <label>Your name:</label>
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => this.handleOnChangeInput(event)}
          ></input>

          <label>Your age:</label>
          <input
            value={this.state.age}
            type="text"
            onChange={(event) => this.handleOnChangeInput(event)}
          ></input>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default UserInfor;
