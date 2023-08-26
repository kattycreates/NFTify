import React from "react";
import "./button.style.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Button = () => {
  return (
    <div className="button">
      <ConnectButton label="Connect" />
    </div>
  );
};

export default Button;
