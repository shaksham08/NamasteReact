import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { teammates } from "./assets/Team";
import Card from "./Components/Card";
import Header from "./Components/Header";
import NoData from "./Components/NoDataCard";
import SearchBar from "./Components/SearchBar";

const App = () => {
  const [allUserData, setAllUserData] = useState(teammates);

  return (
    <>
      <Header />
      <SearchBar setAllUserData={setAllUserData} />
      {!allUserData.length && <NoData message="No users found" />}
      <div className="main__container">
        {allUserData.map((data) => (
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
