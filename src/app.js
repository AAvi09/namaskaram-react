import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";

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
