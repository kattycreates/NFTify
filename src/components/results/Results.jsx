import React from "react";
import ResultItem from "../resultItem/ResultItem";
import "./results.style.css";
const Results = ({ data }) => {
  return (
    <div className="results">
      {data.map((item, index) => (
        <div key={index}>
          <ResultItem data={item}></ResultItem>
          <span className="separator"></span>
        </div>
      ))}
    </div>
  );
};

export default Results;
