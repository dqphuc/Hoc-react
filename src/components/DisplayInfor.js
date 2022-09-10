import React from "react";
import "./DisplayInfor.scss";
import logo from "./../logo.svg";

class DisplayInfor extends React.Component {
  constructor(props) {
    console.log(">>>>> call contructor: 1");
    super(props);

    this.state = {
      isShowListUser: true,
    };
  }
  componentDidMount() {
    console.log(">>> call me componentDidMount");
    setTimeout(() => {
      document.title = "Eric & Hoi dan IT";
    }, 3000);
  }

  componentDidUpdate(prevprops, prevState, snapshot) {
    console.log(">>> call me componentDidUpdate", this.props, prevprops);
    if (this.props.listUsers !== prevprops.listUsers) {
      if (this.props.listUsers.length === 5) {
        alert("you got 5 user");
      }
    }
  }

  handleShowHide = () => {
    this.setState({
      isShowListUser: !this.state.isShowListUser,
    });
  };
  render() {
    console.log(">>> call me render");
    // console.log(this.props)
    // destructuring array/object
    const { listUsers } = this.props;
    //console.log(listUsers);
    // const lisUsers = this.props.listUsres;
    return (
      <div className="display-infor-container">
        {/* <img src={logo} /> */}

        <div>
          <span
            onClick={() => {
              this.handleShowHide();
            }}
          >
            {this.state.isShowListUser === true
              ? "Hide list users"
              : "Show list users"}
          </span>
        </div>
        {this.state.isShowListUser && (
          <div>
            {listUsers.map((user) => {
              return (
                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                  <div>
                    <div> My name is {user.name}</div>
                    <div> My age is {user.age} </div>
                  </div>
                  <div>
                    <button
                      onClick={() => this.props.handleDeleteUser(user.id)}
                    >
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
  }
}
export default DisplayInfor;
