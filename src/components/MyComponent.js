// class component
//function component

import React from "react";
class MyComponent extends React.Component {
  state = {
    name: "Phuc",
    address: "Kien Giang",
    age: 40,
  };
  handleClick(event) {
    //console.log(">>>>> click me my button");
    console.log(event.target)
  }

  render() {
    return (
      <div>
        My name is {this.state.name} I'm from {this.state.address} I'm{" "}
        {this.state.age} year old
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}
export default MyComponent;
