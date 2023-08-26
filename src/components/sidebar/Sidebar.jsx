import React from "react";
import "./sidebar.style.css";
import Logo from "../../Assets/logo.png";
import Tab from "../tab/Tab";
import TokenIcon from "../../Assets/token.png";
import PairIcon from "../../Assets/pair.png";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const Sidebar = ({ activeTab, setActiveTab, open, toggleMenu }) => {
  return (
    <div className="sidebar">
      <div className="close-icon">
        <AiOutlineClose color="white" size={25} onClick={toggleMenu} />
      </div>
      <div className="header">
        <img className="logo" src={Logo} alt="logo" />
        <p className="logo-text">NFTify</p>
      </div>
      <div className="tabs">
        <Tab
          label="Token Address"
          active={activeTab === "token"}
          icon={TokenIcon}
          handleClick={() => setActiveTab("token")}
        />
        <Tab
          label="Pair Address"
          active={activeTab === "pair"}
          icon={PairIcon}
          handleClick={() => setActiveTab("pair")}
        />
      </div>
      <div className="socials">
        <div className="social-link-icon">
          <FaFacebook />
        </div>
        <div className="social-link-icon">
          <FaLinkedin />
        </div>
        <div className="social-link-icon">
          <FaTwitter />
        </div>
      </div>
      <style jsx>{`
        @media only screen and (max-width: 600px) {
          .sidebar {
            position: fixed;
            top: 0;
            left: 0;
            transition: transform 0.3s cubic-bezier(0, 0.52, 0, 1);
            z-index: 9999;
            transform: ${open
              ? "translate3d(0vw, 0, 0)"
              : "translate3d(-100vw, 0, 0)"};
          }
        }
      `}</style>
    </div>
  );
};

export default Sidebar;
