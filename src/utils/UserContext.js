import React, { createContext } from "react";
import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "Default user",
  userType: "chilgoza",
});
export default UserContext;
