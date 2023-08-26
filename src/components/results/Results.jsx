import React from "react";
import ResultItem from "../resultItem/ResultItem";
import "./results.style.css";
const Results = ({ data }) => {
  return (
    <div className="results">
      {data.map((item, index) => (
        <div key={index}>
          <ResultItem data={item}></ResultItem>
          {index < data.length - 1 && (
            <span className="separator">{index}</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default Results;
