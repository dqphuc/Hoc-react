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
    console.log(">>>>> click me my button");

    this.setState({
      name: "Diep Quoc Phuc",
      age: Math.floor(Math.random() * 100 + 1),
    });
  }
  handleOnMouseOver(event) {
    console.log(event.pageX);
  }
  handleOnChangeInput = (event) => {
    this.setState({
      name: event.target.value,
    });
    // console.log(event.target.value)
  };
  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div>
        My name is {this.state.name} I'm from {this.state.address} I'm{" "}
        {this.state.age} year old
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            onChange={(event) => this.handleOnChangeInput(event)}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
export default MyComponent;
