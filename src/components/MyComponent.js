// class component
//function component

import React from "react";
import DisplayInfor from "./DisplayInfor";
import UserInfor from "./UserInfor";
class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "Hoi dan IT", age: "16" },
      { id: 2, name: "Eric", age: "26" },
      { id: 3, name: "Harry Pham Dev", age: "50" },
    ],
  };
  render() {
    // DRY: don't repeat yourselft
    return (
      <div>
        <UserInfor />
        <br /> <br />
        <DisplayInfor
          listUsers={this.state.listUsers}
          
        />
      </div>
    );
  }
}
export default MyComponent;
