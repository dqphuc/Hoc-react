import React, { useState } from "react";
import "./DisplayInfor.scss";
import logo from "./../logo.svg";

// class DisplayInfor extends React.Component {

//   render() {
//     console.log(">>> call me render");
//     // console.log(this.props)
//     // destructuring array/object
//     const { listUsers } = this.props;
//     //console.log(listUsers);
//     // const lisUsers = this.props.listUsres;
//     return (
//       <div className="display-infor-container">

//         {true && (
//           <div>
//             {listUsers.map((user) => {
//               return (
//                 <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                   <div>
//                     <div> My name is {user.name}</div>
//                     <div> My age is {user.age} </div>
//                   </div>
//                   <div>
//                     <button
//                       onClick={() => this.props.handleDeleteUser(user.id)}
//                     >
//                       Delete
//                     </button>
//                   </div>
//                   <hr />
//                 </div>
//               );
//             })}
//           </div>
//         )}
//       </div>
//     );
//   }
// }

const DisplayInfor = (props) => {
  const { listUsers } = props;

  const [isShowHideListUsers, setShowHideListUser] = useState(true);
  // this.state = {
  //   isShowHideListUsers: true
  // }
  const handleShowHideListUser = () => {
    // this.state = {
    //   isShowHideListUsers: true
    // }
    setShowHideListUser(!isShowHideListUsers);
  };
  return (
    <div className="display-infor-container">
      <div>
        <span onClick={() => handleShowHideListUser()}>
          {isShowHideListUsers === true ? "Hide list users" : "Show list users"}
        </span>
      </div>
      {isShowHideListUsers && (
        <div>
          {listUsers.map((user) => {
            return (
              <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                <div>
                  <div> My name is {user.name}</div>
                  <div> My age is {user.age} </div>
                </div>
                <div>
                  <button onClick={() => props.handleDeleteUser(user.id)}>
                    Delete
                  </button>
                </div>
                <hr />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DisplayInfor;
