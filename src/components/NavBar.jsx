import "./NavBar.css";

import React from "react";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import Home from "../../public/home_svg/Home";
import Download from "../../public/download_svg/Download";
import Favorite from "../../public/favorite_svg/Favorite";
import Profile from "../../public/profile_svg/Profile";

const NavBar = () => {
  const [active, setActive] = useState("");
  const location = useLocation();

  const buttonClick = (navText) => {
    setActive(navText);
  };

  const isHomePage = location.pathname === "/" || location.pathname === "/Search" || location.pathname.startsWith("/search");

  return (
    <section className="navbar">
      <article className="home-container">
        <NavLink to="/" onClick={() => buttonClick("Home")}>
        <Home
            fill={
              active === "Home" || isHomePage ? "var(--element-color-red)": "#97AABD"
            }
          />
        </NavLink>
        {(location.pathname === "/" || "isHomePage") && (
          <NavLink to="/" className="home-text"><p>Home</p></NavLink>)}
      </article>

      <article className="download-container">
        <NavLink
          // to="/download"
          onClick={() => buttonClick("Downloads")}
        >
          <Download
            fill={
              active === "Downloads" ? "var(--element-color-red)" : "#97AABD"
            }
          />
        </NavLink>
        {active === "Downloads" && <p className="dl-text">{active}</p>}
      </article>

      <article className="favorite-container">
        <NavLink
          // to="/favorite"
          onClick={() => buttonClick("Favorites")}
        >
          <Favorite
            fill={
              active === "Favorites" ? "var(--element-color-red)" : "#97AABD"
            }
          />
        </NavLink>
        {active === "Favorites" && <p className="favorite-text">{active}</p>}
      </article>

      <article className="profile-container">
        <NavLink
          // to="/profile"
          onClick={() => buttonClick("Profile")}
        >
          <Profile
            fill={active === "Profile" ? "var(--element-color-red)" : "#97AABD"}
          />
        </NavLink>
        {active === "Profile" && <p className="profile-text">{active}</p>}
      </article>
    </section>
  );
};

export default NavBar;
