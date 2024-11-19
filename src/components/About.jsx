import Users from "./Users";
import UserClass from "./UserClass";
// import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);

    console.log("parent constructor");
  }
  componentDidMount() {
    console.log("parent component did mount");
  }
  render() {
    console.log("parent render");
    return (
      <div>
        <h1>About</h1>
        <h2>This is swiggy clone building ......</h2>
        <Users name={"Avinash sharma(function)"} />
        <UserClass name={"Avi(class)"} location={"chaand pe he apun"} />
        <UserClass name={"second(class)"} location={"mangal"} />
        <UserClass name={"third(class)"} location={"rahu"} />
      </div>
    );
  }
}

export default About;
