import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 2,
    };
  }
  render() {
    return (
      <div className="user-card">
        <h1>Count : {this.state.count}</h1>
        <h2>Count2 : {this.state.count2}</h2>
        <h1>Name : {this.props.name}</h1>
        <h2>twitter : avi@210966</h2>
        <h3>Location : {this.props.location}</h3>
      </div>
    );
  }
}

export default UserClass;
