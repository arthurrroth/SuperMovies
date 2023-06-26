import React, { useContext, useState, useEffect, useRef } from 'react';
import { MovieDataContext } from '../../Context';
import './CSS/SearchContainer.css';
import MoviePreview from './Elements/MoviePreview';
import SortButton from './Elements/SortButton';
import SearchBar from './Elements/SearchBar';
import SearchParameter from './SearchParameter';

const SearchContainer = ({setNavEffect}) => {
  const { filteredMovies } = useContext(MovieDataContext);
  const [isStickyCellVisible, setIsStickyCellVisible] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const ResultsContainerRef = useRef(null);

  const handleScroll = () => {
    setScrollPosition(ResultsContainerRef.current.scrollTop);
  };

  useEffect(() => {
    if (ResultsContainerRef.current) {
      ResultsContainerRef?.current.addEventListener("scroll", handleScroll);
      return () => {
        if (ResultsContainerRef.current) {
          ResultsContainerRef.current.removeEventListener("scroll", handleScroll);
        }
        // ResultsContainerRef?.current.removeEventListener("scroll", handleScroll);
      }
    } 
  }, []);

  useEffect(() => {
    if (scrollPosition > 50) {
      console.log("Stickyyy");
      setIsStickyCellVisible(false);
      setNavEffect(true);
      
    } else {
      setIsStickyCellVisible(true);
      setNavEffect(false);
    }
  }, [scrollPosition]);

  return (
    <div className='effect-wrapper-vertical'>
      <div className='top-fade'></div>
      <div className='bottom-fade'></div>

      <div ref={ResultsContainerRef} className="search-and-results-container" id="hide-scrollbar-y">
        <div  className="container-layout">
          <div className={isStickyCellVisible ? "top-left-cell" : "top-left-cell-scrolled"}>
            <div className="search-area">
              <div className="search-sort-wrapper">
                <SortButton  title='Sort'/>
                <SortButton  title='Trends'/>
                <SearchBar/>
              </div>
              <SearchParameter/>
            </div>
          </div>
          {filteredMovies.map((movie, index) => (
            <MoviePreview movie={movie} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchContainer;
