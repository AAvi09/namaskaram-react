import React from "react";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import MyImage from "../images/istockphoto-1319625327-612x612.jpg";
import pouchImage from "../images/Save-Money-On-Groceries_UBC-Food-Services.jpg";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");

  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="left-image">
        <img src={MyImage} height="200" width="300" />
      </div>
      <span className="center-image">
        <img src={pouchImage} height="200" width="350" />
      </span>
      <div>
        <Link to="/">
          <img className="logo" src={LOGO_URL} />
        </Link>
      </div>

      <div className="nav-items">
        <ul>
          <li>onlinestatus : {onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home🏠</Link>
          </li>
          <li>
            <Link to="/about">About🔎 </Link>
          </li>
          <li>
            <Link to="/contact">Contact☎</Link>
          </li>
          <li>Cart🛒 </li>
          <li>
            <Link to="/grocery">Grocery🍅🍠🥕</Link>
          </li>
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
