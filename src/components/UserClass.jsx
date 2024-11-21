import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "default",
      },
    };
    console.log("child constructor");
  }
  async componentDidMount() {
    console.log("child component did mount");
    const data = await fetch("https://api.github.com/users/AAvi09");
    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });
  }
  render() {
    console.log("child render");
    return (
      <div className="user-card">
        <img src={this.state.userInfo.avatar_url} />
        <h1> {this.state.userInfo.name}</h1>
        <h2>{this.state.userInfo.location}</h2>
        <h3>{this.state.userInfo.Login}</h3>
        {/* <button
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
        <h3>Location : {this.props.location}</h3> */}
      </div>
    );
  }
}

export default UserClass;
