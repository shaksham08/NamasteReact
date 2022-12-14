import React from "react";
import "./style.css";

const NoData = ({ message = "No Data available" }) => (
  <h1 className="noDataCard">{message}</h1>
);

export default NoData;
