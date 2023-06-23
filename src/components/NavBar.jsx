import "./NavBar.css";

import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

import Home from "../../public/home_svg/Home";
import Download from "../../public/download_svg/Download";
import Favorite from "../../public/favorite_svg/Favorite";
import Profile from "../../public/profile_svg/Profile";

const NavBar = () => {
  const [active, setActive] = useState("");
  const [showText, setShowText] = useState(window.innerWidth >= 576);
  const location = useLocation();

  const buttonClick = (navText) => {
    setActive(navText);
  };

  const isHomePage =
    location.pathname === "/" ||
    location.pathname === "/search:searchParam" ||
    location.pathname.startsWith("/search");

  useEffect(() => {
    const handleResize = () => {
      setShowText(window.innerWidth >= 576);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="navbar">
      <article className="home-container">
        <NavLink to="/" onClick={() => buttonClick("Home")}>
          <Home
            fill={
              active === "Home" || isHomePage
                ? "var(--element-color-red)"
                : "#97AABD"
            }
          />
        </NavLink>
        {(isHomePage || showText) && (
          <NavLink
            to="/"
            onClick={() => buttonClick("Home")}
            className={`home-text${isHomePage ? " show" : ""}`}
          >
            <p>Home</p>
          </NavLink>
        )}
      </article>

      <article className="favorite-container">
        <NavLink to="/favorite" onClick={() => buttonClick("Favorite")}>
          <Favorite
            fill={
              active === "Favorite" || location.pathname === "/favorite"
                ? "var(--element-color-red)"
                : "#97AABD"
            }
          />
        </NavLink>
        {(location.pathname === "/favorite" || showText) && (
          <NavLink
            to="/favorite"
            onClick={() => buttonClick("Favorites")}
            className={`dl-text${location.pathname === "/favorite" ? " show" : ""}`}
          >
            <p>Favorites</p>
          </NavLink>
        )}
      </article>

      <article className="download-container">
        <NavLink to="/download" onClick={() => buttonClick("Downloads")}>
          <Download
            fill={
              active === "Downloads" || location.pathname === "/download"
                ? "var(--element-color-red)"
                : "#97AABD"
            }
          />
        </NavLink>
        {(location.pathname === "/download" || showText) && (
          <NavLink
            to="/download"
            onClick={() => buttonClick("Downloads")}
            className={`dl-text${location.pathname === "/download" ? " show" : ""}`}
          >
            <p>Downloads</p>
          </NavLink>
        )}
      </article>

      <article className="profile-container">
        <NavLink to="/profile" onClick={() => buttonClick("Profile")}>
          <Profile
            fill={
              active === "Profile" || location.pathname === "/profile"
                ? "var(--element-color-red)"
                : "#97AABD"
            }
          />
        </NavLink>
        {(location.pathname === "/profile" || showText) && (
          <NavLink
            to="/profile"
            onClick={() => buttonClick("Profile")}
            className={`dl-text${location.pathname === "/profile" ? " show" : ""}`}
          >
            <p>Profile</p>
          </NavLink>
        )}
      </article>
    </section>
  );
};

export default NavBar;
