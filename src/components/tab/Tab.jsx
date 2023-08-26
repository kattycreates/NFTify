import React from "react";
import "./tab.style.css";
const Tab = ({ label, handleClick, active, icon }) => {
  return (
    <button
      className={active ? "tabItem tabItem-active" : "tabItem"}
      onClick={handleClick}
    >
      <img src={icon} alt={label} />
      <label>{label}</label>
    </button>
  );
};

export default Tab;
