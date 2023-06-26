import './FavoritePage.css'
import { useState, useContext, useEffect, useRef } from "react";
import { MovieDataContext } from '../../Context';

import FloatNavBar from '../../components/NavBar/FloatNavBar'
import React from 'react';
import SearchBar from '../../components/Search/Elements/SearchBar';
import SearchParameter from '../../components/Search/SearchParameter';
import SortButton from '../../components/Search/Elements/SortButton';
import MoviePreview from '../../components/Search/Elements/MoviePreview';


const FavoritePage = () => {
  const ResultsContainerRef = useRef(null);
  const [navEffect, setNavEffect] = useState();
  const [isStickyCellVisible, setIsStickyCellVisible] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  const {favouritedMovies, setFavMovies} = useContext(MovieDataContext);


  useEffect(() => {
      console.log({favouritedMovies});
  }, [favouritedMovies])

  const handleScroll = () => {
    setScrollPosition(ResultsContainerRef.current.scrollTop);
  };

  useEffect(() => {
    if (ResultsContainerRef.current) {
      ResultsContainerRef?.current.addEventListener("scroll", handleScroll);
      return () => {
        ResultsContainerRef?.current.removeEventListener("scroll", handleScroll);
      }
    } 
  }, [ResultsContainerRef]);

  useEffect(() => {
    if (scrollPosition > 50) {
      // console.log("Stickyyy");
      setIsStickyCellVisible(false);
      setNavEffect(true);
      
    } else {
      setIsStickyCellVisible(true);
      setNavEffect(false);
    }
  }, [scrollPosition]);

    return (
          <section className="favorite-page">

            <article className='fav-page-title'>
              <h2>Favorites</h2>
            </article>
            <div className='effect-wrapper-vertical'>
              <div className='top-fade'></div>
              <div className='bottom-fade'></div>
              <div ref={ResultsContainerRef}  className='search-and-results-container'>
                <div className='container-layout'>
                  <div className={isStickyCellVisible ? "top-left-cell" : "top-left-cell-scrolled"}>
                  <div className="search-area">
                  <div className="search-sort-wrapper">
                    <SortButton  title='Sort'/>
                    <SortButton  title='Trends'/>
                    <SearchBar />
                  </div>
                  <SearchParameter />
                  </div>
                </div>
                {favouritedMovies.map((movie, index) => (
                  <MoviePreview movie={movie} key={index}/>
            ))}
              </div>
              </div>
            </div>
            <FloatNavBar navEffect={navEffect} />
          </section>
      );

}
 
export default FavoritePage;