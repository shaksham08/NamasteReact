import React from "react";
import "./style.css";
import UserSVG from "../../assets/User.svg";
import LogoSVG from "../../assets/Logo.svg";

const Header = () => {
  return (
    <div className="heading__container">
      <span className="heading__header">
        <img className="heading__icon" src={LogoSVG} />
        <h2 className="heading__text">Gladiators</h2>
      </span>
      <input className="heading__search" placeholder="Search Something Here" />
      <img className="heading__icon" src={UserSVG} />
    </div>
  );
};

export default Header;
