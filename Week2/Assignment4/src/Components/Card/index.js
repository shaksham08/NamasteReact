import React from "react";
import "./style.css";
import Avatar from "../../assets/Avatar.svg";

const Card = ({
  userData: { name = "NA", company = "NA", location = "NA", experience = "NA" },
}) => {
  return (
    <div className="card__container">
      <img className="card__avatar" src={Avatar} />
      <span className="card__text__container">
        <h3 className="card__text">{name}</h3>
        <h4>Place : {location}</h4>
        <h4>Company/College : {company}</h4>
        <h4>Experience :{experience}</h4>
      </span>
    </div>
  );
};

export default Card;
