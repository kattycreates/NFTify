import React from "react";
import Card from "../card/Card";
import CardTokenIcon from "../../Assets/card-token.png";
import DollarIcon from "../../Assets/dollar.png";
import InfoIcon from "../../Assets/info.png";
import "./resultItem.style.css";

const ResultItem = ({ data }) => {
  const basicInfo = {
    "Pair created at": data.pairCreatedAt,
    Symbol: "ETH",
    "Dex ID": data.dexId,
    "Pair Address": data.pairAddress,
  };
  const baseToken = data.baseToken;
  const quoteToken = data.quoteToken;
  const price = {
    "Price Native": data.priceNative,
    "Price USD": data.priceUsd,
  };
  return (
    <div className="result-item">
      <Card title="Basic Info" data={basicInfo} icon={InfoIcon} />
      <Card title="Base Token" data={baseToken} icon={CardTokenIcon} />
      <Card title="Quote Token" data={quoteToken} icon={CardTokenIcon} />
      <Card title="Price" data={price} icon={DollarIcon} />
    </div>
  );
};

export default ResultItem;
