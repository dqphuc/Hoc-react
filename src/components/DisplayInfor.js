import React from "react";
class DisplayInfor extends React.Component {
  render() {
    // console.log(this.props)
    // destructuring array/object
    const { listUsers } = this.props;
    console.log(listUsers);
    // const lisUsers = this.props.listUsres;
    return (
      <div>
        {listUsers.map((user) => {
          return (
            <div key={user.id}>
              <div> My name is {user.name}</div>
              <div> My age is {user.age} </div>
              <hr />
            </div>
          );
        })}
        {/* <div> My name is {this.props.name} </div>
                <div> My age is {this.props.age} </div> */}
        {/* <div> My name is {name} </div>
                <div> My age is {age} </div>
                <hr/>
                <div> My name is {name} </div>
                <div> My age is {age} </div>
                <hr/>
                <div> My name is {name} </div>
                <div> My age is {age} </div> */}
      </div>
    );
  }
}
export default DisplayInfor;
