import React from "react";
import ReactDOM from "react-dom";
import Header from "./Components/Header";

// Simple heading element
const simpleHeading = React.createElement(
  "h1",
  {
    className: "heading",
  },
  "this is a simple heading element"
);

// simple heading using JSX
const simpleHeadingJSX = (
  <h1 className="heading">this is a simple heading element using JSX</h1>
);

// Added nested element using React Element
const NestedHeading = React.createElement(
  "div",
  {
    className: "heading",
  },
  React.createElement(
    "h1",
    {},
    "This is heading from Namaste React Assignment 3"
  )
);

// Added nested element using JSX
const NestedHeadingJSX = (
  <div className="heading">
    <h1>This is heading from Namaste React Assignment 3</h1>
  </div>
);

// Basic React Component
const HeadingComponent = () => <h1 className="title">hello</h1>;

const value = "This is a value";

const TitleComponent = () => (
  <div>
    <h1>Hello</h1>
    <h2>World</h2>
    <h3>{value}</h3>
    {NestedHeadingJSX}
  </div>
);

// Composition of component
const MainTitle = () => (
  <div>
    <TitleComponent />
    <TitleComponent></TitleComponent>
  </div>
);
// Getting root element to inject the elements created using React
const root = ReactDOM.createRoot(document.getElementById("root"));
// Rendering it on the DOM
root.render(<Header />);
