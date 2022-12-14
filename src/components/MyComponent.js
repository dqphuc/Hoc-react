// class component
//function component

import React, { useState } from "react";
import DisplayInfor from "./DisplayInfor";
import AddUserInfor from "./AddUserInfor";
// class MyComponent extends React.Component {
//   state = {
//     listUsers: [
//       { id: 1, name: "Hoi dan IT", age: "16" },
//       { id: 2, name: "Eric", age: "26" },
//       { id: 3, name: "Harry Pham Dev", age: "50" },
//     ],
//   };
//   handleAddNewUser = (userObj) => {
//     console.log(">>>>> check data from component", userObj);
//     this.setState({
//       listUsers: [userObj, ...this.state.listUsers],
//     });
//   };
//   handleDeleteUser = (userId) => {
//     let listUsersClone = this.state.listUsers;
//     listUsersClone = listUsersClone.filter((item) => item.id !== userId);
//     this.setState({
//       listUsers: listUsersClone,
//     });
//   };
//   render() {
//     // DRY: don't repeat yourself
//     return (
//       <>
//         <div className="a">
//           <AddUserInfor handleAddNewUser={this.handleAddNewUser} />
//           <br /> <br />
//           <DisplayInfor
//             listUsers={this.state.listUsers}
//             handleDeleteUser={this.handleDeleteUser}
//           />
//         </div>
//         <div className="b"></div>
//       </>
//     );
//   }
// }

const MyComponent = (props) => {
  const [listUsers, setListUsers] = useState(
    [{ id: 1, name: "Hoi dan IT", age: "16" },
    { id: 2, name: "Eric", age: "26" },
    { id: 3, name: "Harry Pham Dev", age: "50" }]
  );

  const handleAddNewUser = (userObj) => {
    setListUsers([userObj, ...listUsers]);

    // this.setState({
    //     listUsers: [userObj, ...this.state.listUsers],
    //   });
  };
  const handleDeleteUser = (userId) => {
    let listUsersClone = listUsers;
    listUsersClone = listUsersClone.filter((item) => item.id !== userId);
    setListUsers(listUsersClone);
    // this.setState({
    //   listUsers: listUsersClone,
    // });
  };

  return (
    <>
      <div className="a">
        <AddUserInfor handleAddNewUser={handleAddNewUser} />
        <br /> <br />
        <DisplayInfor
          listUsers={listUsers}
          handleDeleteUser={handleDeleteUser}
        />
      </div>
      <div className="b"></div>
    </>
  );
};
export default MyComponent;
