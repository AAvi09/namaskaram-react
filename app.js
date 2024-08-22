import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "i m a h1"),
    React.createElement("h2", {}, "i m a h2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "i m a h1"),
    React.createElement("h2", {}, "i m a h2"),
  ]),
]);

const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "namastey react with help of javaScript"
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
