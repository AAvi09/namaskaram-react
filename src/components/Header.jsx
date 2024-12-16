import React from "react";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import MyImage from "../images/istockphoto-1319625327-612x612.jpg";
import pouchImage from "../images/Save-Money-On-Groceries_UBC-Food-Services.jpg";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  const { loggedInUser } = useContext(UserContext);

  const onlineStatus = useOnlineStatus();

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex h-[150px] justify-between bg-white-800 relative shadow-lg mb-3">
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

      <div className="nav-items bg-white-800 shadow-md">
        <ul className="flex items-center justify-between p-4 md:p-6 space-x-3 md:space-x-5">
          <li className="text-xs md:text-base font-bold text-black-700 justify-between space-x-1">
            Online Status: {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li>
            <Link
              to="/"
              className="text-xs md:text-base bg-white-800 font-medium text-black-700 hover:bg-gray-200 rounded-full p-3  hover:transition-transform duration-300 ease-in-out hover:scale-90 
 "
            >
              Home🏠
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-xs md:text-base bg-white-800 font-medium text-black-700   hover:bg-gray-200 p-3 rounded-full"
            >
              About🔎
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-xs md:text-base font-medium text-black-700 bg-white-800   hover:bg-gray-200 p-3 rounded-full "
            >
              Contact☎
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="text-xs md:text-base font-medium text-black-700 bg-white-800 cursor : pointer  hover:bg-gray-200 p-3 rounded-full  "
            >
              Cart🛒-{cartItems.length}
            </Link>
          </li>
          <li>
            <Link
              to="/grocery"
              className="text-xs md:text-base font-medium text-black-700   p-3 bg-white-800   hover:bg-gray-200  rounded-full "
            >
              Grocery🍅
            </Link>
          </li>
          <li>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors shadow-md"
              onClick={() => {
                loginBtn === "Login"
                  ? setLoginBtn("Logout")
                  : setLoginBtn("Login");
              }}
            >
              {loginBtn}
            </button>
            <li>{loggedInUser}</li>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
