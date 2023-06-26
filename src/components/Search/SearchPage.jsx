
import React, { useState, useContext } from "react";
import { MovieDataContext } from "../../Context";
import "./CSS/Search.css"

import SearchContainer from "./SearchContainer";
import FloatNavBar from "../NavBar/FloatNavBar";

const SearchPage = () => {
  const {filteredMovies} = useContext(MovieDataContext);
  const [navEffect, setNavEffect] = useState();
  
  return (
    <div className="page-container">
        <div className="result-count">
          <p>{filteredMovies.length} Movies</p>
        </div>
        <SearchContainer setNavEffect={setNavEffect}/>
        <FloatNavBar navEffect={navEffect}/>
    </div>
  )
}

export default SearchPage
