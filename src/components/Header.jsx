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
    <div className="flex h-[150px] justify-between bg-red-600 relative">
      <div className="left-image">
        <img
          src={MyImage}
          className="w-1/2 h-1/2 object-cover  rounded-full rotate-[-10deg] transition ease-in-out duration-300 hover:scale-105"
        />
      </div>
      <span className="center-image">
        <img
          src={pouchImage}
          className="w-3/2 h-1/2 object-cover rounded-full rotate-[-15deg] transition ease-in-out duration-300 hover:scale-105"
        />
      </span>
      <div className="absolute top-[50%] left-[5%] transform -translate-y-1/2 justify-between p-50">
        <Link to="/">
          <img
            className="w-32 h-32 rounded-1/4 transition duration-300 ease-in-out hover:scale-110 hover:shadow-lg"
            src={LOGO_URL}
          />
        </Link>
      </div>

      <div className="nav-items">
        <ul className="flex justify-between p-10 m-4 space-x-10">
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
