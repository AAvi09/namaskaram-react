import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 2,
    };
    console.log("child constructor");
  }
  componentDidMount() {
    console.log("render");
  }
  render() {
    console.log("child render");
    return (
      <div className="user-card">
        <h1>Count : {this.state.count}</h1>
        <h2>Count2 : {this.state.count2}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count + 1,
            });
          }}
        >
          Count increase
        </button>
        <h1>Name : {this.props.name}</h1>
        <h2>twitter : avi@210966</h2>
        <h3>Location : {this.props.location}</h3>
      </div>
    );
  }
}

export default UserClass;
