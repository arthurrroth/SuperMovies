import React, { useState, useContext } from "react";
import TrendingMoviesDisplay from '../../components/TrendingMoviesDisplay'
import './HomePage.css'
import FloatNavBar from '../../components/NavBar/FloatNavBar';
import SearchBar from '../../components/Search/Elements/SearchBar';
import SearchParameter from '../../components/Search/SearchParameter';

const HomePage = () => {

  return (
    <div className='home'>
        <h1>Welcome</h1>
        <SearchBar/>
        <SearchParameter/>
        <TrendingMoviesDisplay/>
        <FloatNavBar />
    </div>
  )
}

export default HomePage