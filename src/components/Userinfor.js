import React from "react";

class UserInfor extends React.Component{
    state = {
        name: "Phuc",
        address: "Kien Giang",
        age: 40,
      };
     
    
      handleOnChangeInput = (event) => {
        this.setState({
          name: event.target.value,
        });
      };
    
      handleOnChangeAge = (event) => {
        this.setState({
          age: event.target.value,
        });
      };
    
      handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
      };
    render(){
        return(
           <div> My name is {this.state.name} I'm from {this.state.address} I'm{" "}
           {this.state.age} year old
           <form onSubmit={(event) => this.handleOnSubmit(event)}>
             <lable> Your name: </lable>
             <input
               value={this.state.name}
               type="text"
               onChange={(event) => this.handleOnChangeInput(event)}
             />
   
             <lable>Your age: </lable>
             <input
               value={this.state.age}
               type="text"
               onChange={(event) => this.handleOnChangeAge(event)}
             />
             <button>Submit</button>
           </form></div> 
            );
    }
        
    

}

export default UserInfor;