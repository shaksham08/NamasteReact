import React from "react";
import ReactDOM from "react-dom/client";
import { teammates } from "./assets/Team";
import Card from "./Components/Card";
import Header from "./Components/Header";

const App = () => {
  return (
    <>
      <Header />
      <div className="main__container">
        {teammates.map((data) => (
          <Card userData={data} key={data.id} />
        ))}
      </div>
    </>
  );
};

// Getting root element to inject the elements created using React
const root = ReactDOM.createRoot(document.getElementById("root"));
// Rendering it on the DOM
root.render(<App />);
