import React from "react";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");

  return (
    <div className="header">
      <div>
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home🏠</li>
          <li>About🔎 </li>
          <li>Contact☎</li>
          <li>Cart🛒 </li>
          <button
            className="login-btn"
            onClick={() => {
              loginBtn === "Login"
                ? setLoginBtn("Logout")
                : setLoginBtn("Login");
            }}
          >
            {loginBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
