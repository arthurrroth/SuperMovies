import React, {useContext, useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './FloatBar.css';
import Home from '../../assets/icons/home_svg/Home';
import Download from '../../assets/icons/download_svg/Download';
import Favorite from '../../assets/icons/favorite_svg/Favorite';
import Profile from '../../assets/icons/profile_svg/Profile';
import SearchIcon from '../../assets/icons/search_svg/SearchIcon';
import { AppContext } from '../../assets/Context';


const FloatBar = ({navEffect}) => {
  const {active, setActive} = useContext(AppContext);
  const navigate = useNavigate();

  const buttonClick = (navText) => {
    setActive(navText);
  }

  return (
    <section className={navEffect? "navbar-hidden" : "navbar"}>
    <div className="home-container">
      <NavLink to="/" onClick={() => buttonClick("Home")}>
        <Home active = {active}/>
      </NavLink>
    </div>

    <div className="download-container" onClick={() => {
      buttonClick("Search");
      navigate('/search');}}>
      <SearchIcon active = {active}/>
    </div>

    <div className="favorite-container">
      <NavLink
        to="/favorite"
        onClick={() => buttonClick("Favorites")}>
        <Favorite active={active}/>
      </NavLink>
      
    </div>

    <div className="profile-container">
      <NavLink
        to="/profile"
        onClick={() => buttonClick("Profile")}
      >
        <Profile active={active}/>
      </NavLink>
    </div>
  </section>
  )
}

export default FloatBar