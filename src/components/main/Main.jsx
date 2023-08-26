import React, { useState } from "react";
import "./main.style.css";
import Search from "../searchbar/Search";
import Results from "../results/Results";
import Button from "../button/Button";
import Header from "../header/Header";

const Main = ({ activeTab, open, toggleMenu }) => {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);
  // token - 0x2170Ed0880ac9A755fd29B2688956BD959F933F8
  // pair - 0xD0e226f674bBf064f54aB47F42473fF80DB98CBA
  const pairUrl = `https://api.dexscreener.com/latest/dex/search/?q=${searchText}`;
  const tokenUrl = `https://api.dexscreener.com/latest/dex/tokens/${searchText}`;
  const url = activeTab === "token" ? tokenUrl : pairUrl;
  const sortData = (data) => {
    const sortedData = data.sort((a, b) => b.priceUsd - a.priceUsd);
    return sortedData;
  };
  const fetchData = async () => {
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();

    if (data && data.pairs) {
      if (data.pairs.length > 10) {
        const sorted = sortData(data.pairs.slice(0, 10));
        setData(sorted);
      } else {
        const sorted = sortData(data?.pairs);
        setData(sorted);
      }
    } else {
      setData([]);
    }
    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };
  return (
    <div className="main-container">
      <Header open={open} toggleMenu={toggleMenu} />
      <div className="search-container">
        <Search
          searchText={searchText}
          setSearchText={setSearchText}
          handleSubmit={handleSubmit}
        />
        <div className="desktop-connect">
          <Button />
        </div>
      </div>

      <p className="results-text">
        {loading
          ? "Fetching search results..."
          : data.length === 0
          ? "No results"
          : activeTab === "token"
          ? "Token Search Results"
          : "Pair Search Results"}
      </p>
      <Results data={data} />
    </div>
  );
};

export default Main;
