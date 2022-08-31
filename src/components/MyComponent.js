// class component
//function component

import React from "react";
class MyComponent extends React.Component {
  state = {
    name: "Phuc",
    address: "Kien Giang",
    age: 40,
  };

  render() {
    return (
      <div>
        My name is {this.state.name} I'm from {this.state.address} I'm{" "}
        {this.state.age} year old
      </div>
    );
  }
}
export default MyComponent;
