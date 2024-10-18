import React from "react";
import ReactDOM from "react-dom/client";

//react element
const Title = () => (
  <h1 className="head" tabIndex="5">
    Namastey react 🚀👩‍🚀👨‍🚀
  </h1>
);

//react functional components
const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h1>Namastey react functional component</h1>;
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
