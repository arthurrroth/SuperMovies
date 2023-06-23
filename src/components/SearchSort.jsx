

import React, { useState, useEffect, useContext } from "react";
import { MovieDataContext } from "../Context";
import SearchIcon from "../assets/icons/SearchIcon";
import Carousel from "./Carousel";


const SearchSort = () => {
 // Global States
 const { detailedMovies } = useContext(MovieDataContext);
  // Local States
 const [genreArray, setGenreArray] = useState([]);
 const [selectedGenres, setSelectedGenres] = useState([]);
 const [currentSearchInputString, setCurrentSearchInputString] = useState("");
 const [filteredMovies, setFilteredMovies] = useState([]);




 const [fill, setFill] = useState('#A4A3A3');
 const [SearchBarBorder, setSearchBarBorder] = useState({ '--border-color-1': 'rgb(250, 240, 240)' });
 const [placeholderColor, setPlaceholderColor] = useState({'--placeholder-color' : 'rgb(150, 150, 150)'});
 const [isFocused, setFocused] = useState();


 const handleFocus = () => {
   setFill('red');
   setSearchBarBorder({ '--border-color-1': 'rgb(255, 164, 164)' });
   setPlaceholderColor({'--placeholder-color' : 'rgb(255, 142, 142)'});
   setFocused(true);


};


 const handleBlur = () => {
   setFill('#A4A3A3');
   setSearchBarBorder({ '--border-color-1': 'rgb(250, 240, 240)' });
   setPlaceholderColor({'--placeholder-color' : 'rgb(150, 150, 150)'});
   setFocused(false);


};


 const handleMouseEnter = () => {
   if (isFocused) {
      
   } else {
       setFill('#ac8787');
       setSearchBarBorder({ '--border-color-1': 'rgb(255, 216, 216)' });
       setPlaceholderColor({'--placeholder-color' : 'rgb(150, 150, 150)'})


   }
};


const handleMouseLeave = () => {
   if (isFocused) {


   } else {
       setFill('#A4A3A3');
       setSearchBarBorder({ '--border-color-1': 'rgb(250, 240, 240)' });
       setPlaceholderColor({'--placeholder-color' : 'rgb(150, 150, 150)'})
   }
};


 useEffect(() => {
   // Filter movies whenever selected genres or search input changes
   const filterMovies = () => {
     const filteredMovies = detailedMovies.filter((movie) => {
       const genreMatch = selectedGenres.some((selectedGenre) =>
         movie.genre.some((movieGenre) => movieGenre.name === selectedGenre)
       );


       const titleMatch =
         !currentSearchInputString ||
         movie.title
           .toLowerCase()
           .includes(currentSearchInputString.toLowerCase());


       return genreMatch && titleMatch;
     });


     setFilteredMovies(filteredMovies);
   };


   filterMovies();
 }, [ selectedGenres, currentSearchInputString]);


 // Event handlers
 const handleGenreSelection = (genre) => {
   setSelectedGenres([...prev, genre]);
 };


 const handleSearchInput = (input) => {
   setCurrentSearchInputString(input);
   console.log({currentSearchInputString});
 };


 return (
   <div className='discovery'>
       <div className='search-bar' style={SearchBarBorder} >
           <input
           type="text"
           placeholder='Search'
           style={placeholderColor}
           onChange={() => handleSearchInput()}
           onFocus={() => handleFocus()}
           onBlur={() => handleBlur()}
           onMouseEnter={() => handleMouseEnter()}  
           onMouseLeave={() => handleMouseLeave()}
           />
           <SearchIcon fill={fill}/>
       </div>
       <div className="section-header">
         <h5 id="search-tags">Genre Filter</h5>
         <svg width="260" height="3" viewBox="0 0 318 3" fill="none" >
         <path d="M0.5 1.5H318" stroke="#A8A8A8" strokeWidth="2"/>
         </svg>
       </div>
         <Carousel/>
       <div className="section-header">
         <h5 id="search-tags">Sort Options</h5>
         <svg width="260" height="3" viewBox="0 0 318 3" fill="none" >
         <path d="M0.5 1.5H318" stroke="#A8A8A8" strokeWidth="2"/>
         </svg>
       </div>
     
   </div>
    
 );
}


export default SearchSort





