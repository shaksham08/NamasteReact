import React from "react";
import ReactDOM from "react-dom";
// Added nested components here
const heading = React.createElement(
  "div",
  {
    className: "heading",
  },
  React.createElement(
    "h1",
    {},
    "This is heading from Namaste React Assignment 1"
  )
);

// Getting root element to inject the elements created using React
const root = ReactDOM.createRoot(document.getElementById("root"));
// Rendering it on the DOM
root.render(heading);
