import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 * -Logo
 * -new items
 * Body
 * - search
 * - Restraunt container
 *   - Restraunt card
 *   -----Img
 *   -----Name of res,star rating,cuisine,delivery time
 * Footer
 * - copyright
 * - links
 * - address
 * - contact
 */
const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          className="logo"
          src="https://thumbs.dreamstime.com/b/fast-food-logo-design-concepts-set-unique-ideas-pizza-kebab-burger-retro-elements-symbols-icons-46091401.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About </li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const Rescard = () => {
  return (
    <div className="res-card">
      <h3>meghna foods</h3>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="res-container">
        <Rescard />
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
