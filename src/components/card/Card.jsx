import React from "react";
import "./card.style.css";

const Card = ({ title, data, icon }) => {
  return (
    <div className="card">
      <p className="card-title">{title}</p>
      <ul className="card-info">
        {Object.keys(data).map((item, index) => (
          <li className="card-info-item" key={index}>
            <span className="card-item-label">{item}</span>
            <span className="card-item-value">{data[item]}</span>
          </li>
        ))}
      </ul>
      <div className="card-icon">
        <img src={icon} alt="icon" />
      </div>
    </div>
  );
};

export default Card;
