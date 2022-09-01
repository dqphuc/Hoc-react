// class component
//function component

import React from "react";
import DisplayInfor from "./DisplayInfor";
import UserInfor from "./Userinfor";
class MyComponent extends React.Component {
  render() {
    const myInfor = ["anam", "baca", "cada"];
    return (
      <div>
        <UserInfor />
        <br /> <br />
        <DisplayInfor name="Diep Quoc Phuc" age={40} myInfor={myInfor} />
      </div>
    );
  }
}
export default MyComponent;
