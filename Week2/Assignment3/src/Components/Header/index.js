import React from "react";
import "./style.css";
import UserSVG from "../../assets/User.svg";
import LogoSVG from "../../assets/Logo.svg";

const Header = () => {
  return (
    <div className="heading__container">
      <img className="heading__icon" src={LogoSVG} />
      <input className="heading__search" placeholder="Search Something Here" />
      <img className="heading__icon" src={UserSVG} />
    </div>
  );
};

export default Header;
