import React, { useState } from "react";
import "./search.style.css";
import SearchIcon from "../../Assets/search.png";
import { FaSearch } from "react-icons/fa";
const Search = ({ searchText, setSearchText, handleSubmit }) => {
  return (
    <div
      className="search-box"
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          handleSubmit(e);
        }
      }}
    >
      <input
        className="search-input"
        placeholder="Search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <FaSearch color="white" size={18} onClick={handleSubmit} />
    </div>
  );
};

export default Search;
