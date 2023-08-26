import React, { useState } from "react";
import "./header.style.css";
import Button from "../button/Button";

const Header = ({ open, toggleMenu }) => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <div
      className={colorChange ? "mobile-header colorChange" : "mobile-header"}
    >
      <div className="left-div">
        <div className="hamburger" onClick={toggleMenu}>
          <div className="burger burger1" />
          <div className="burger burger2" />
          <div className="burger burger3" />
        </div>

        <p className="header-logo-text">NFTify</p>
      </div>
      <div className="right-div">
        <Button />
      </div>
    </div>
  );
};

export default Header;
