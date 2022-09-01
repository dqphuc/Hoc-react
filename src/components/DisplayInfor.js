import React from "react";
class DisplayInfor extends React.Component {
    render(){
        // console.log(this.props)
       // destructuring array/object
       const {name, age} = this.props;
        return(
            <div>
                {/* <div> My name is {this.props.name} </div>
                <div> My age is {this.props.age} </div> */}
                <div> My name is {name} </div>
                <div> My age is {age} </div>
            </div>
        )

    }
}
export default DisplayInfor;