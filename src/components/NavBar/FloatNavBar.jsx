import "./FloatBar.css";

import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import Home from "../../assets/icons/home_svg/Home";
import Download from "../../assets/icons/download_svg/Download";
import Favorite from "../../assets/icons/favorite_svg/Favorite";
import Profile from "../../assets/icons/profile_svg/Profile";

const FloatNavBar = ({navEffect}) => {
  const [active, setActive] = useState("Home");

  const buttonClick = (navText) => {
    setActive(navText);
  };

  return (
    <section className={navEffect? "navbar-hidden" : "navbar"}>
      <div className="home-container">
        <NavLink to="/" onClick={() => buttonClick("Home")}>
          <Home active = {active}/>
        </NavLink>
      </div>

      <div className="download-container">
        <NavLink onClick={() => buttonClick("Downloads")}>
          <Download active={active}/>
        </NavLink>
      </div>

      <div className="favorite-container">
        <NavLink
          // to="/favorite"
          onClick={() => buttonClick("Favorites")}>
          <Favorite active={active}/>
        </NavLink>
        
      </div>

      <div className="profile-container">
        <NavLink
          // to="/profile"
          onClick={() => buttonClick("Profile")}
        >
          <Profile active={active}/>
        </NavLink>
      </div>
    </section>
  );
};

export default FloatNavBar;
