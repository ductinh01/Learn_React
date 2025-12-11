import React from "react";

class DisplayInfor extends React.Component {
  render() {
    //destructuring array/object
    const { listUser } = this.props; //object
    //const listUser = this.props.listUsers;
    return (
      <div>
        {listUser.map((user, index) => {
          return (
            <div key={user.id}>
              <div>My name's {user.name}</div>
              <div>My age's {user.age}</div>
              <hr />
            </div>
          );
        })}
      </div>
    );
  }
}
export default DisplayInfor;
