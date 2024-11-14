import Users from "./Users";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);

    console.log("parent constructor");
  }
  render() {
    console.log("parent render");
    return (
      <div>
        <h1>About</h1>
        <h2>This is swiggy clone building ......</h2>
        <Users name={"Avinash sharma(function)"} />
        <UserClass name={"Avi(class)"} location={"chaand pe he apun"} />
      </div>
    );
  }
}

export default About;
