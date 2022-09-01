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
      age: Math.floor((Math.random()*100)+1)
    });
  }
  handleOnMouseOver(event) {
    console.log(event.pageX);
  }

  render() {
    return (
      <div>
        My name is {this.state.name} I'm from {this.state.address} I'm{" "}
        {this.state.age} year old
        <button onMouseOver={this.handleOnMouseOver}>Hoverme</button>
        <button
          onClick={(event) => {
            this.handleClick(event);
          }}
        >
          Click me
        </button>
      </div>
    );
  }
}
export default MyComponent;
