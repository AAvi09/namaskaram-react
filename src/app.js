import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Error from "./components/Error.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
  },
  { path: "/contact", element: <Contact /> },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);
