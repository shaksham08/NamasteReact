import React, { useState } from "react";
import teammates from "../../Team.json";
import "./style.css";

const SearchBar = ({ setAllUserData }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const filteredList =
      teammates &&
      teammates.filter((teamData) =>
        teamData.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    setAllUserData(filteredList);
  };

  return (
    <div className="search__container">
      <form onSubmit={handleSubmit}>
        <input
          className="search__input"
          placeholder="Search User"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="search__button">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
