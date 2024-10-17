import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namastey react 🚀👩‍🚀👨‍🚀"
);
const jsxheading = <h1>namastey react in jsx</h1>;
console.log(heading);
console.log(jsxheading);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxheading);
