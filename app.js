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
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
