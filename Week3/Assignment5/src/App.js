import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import teammates from "./Team.json";
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
      {(!allUserData || !allUserData.length) && (
        <NoData message="No users found" />
      )}
      <div className="main__container">
        {allUserData &&
          allUserData.map((data) => <Card userData={data} key={data.id} />)}
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
