import React, { useContext, useEffect, useRef, useState } from 'react';
import './SearchArea.css'
// Import Components
import Button1 from '../Buttons/Button1';
import Button2 from '../Buttons/Button2';
import SearchBar from '../Input/SearchBar';
import GenreSelector from '../GenreSelector/GenreSelector';
import MoviePreview from '../MoviePreview/MoviePreview';
import { AppContext, MovieDataContext } from '../../assets/Context';



const SearchArea = ({setNavEffect}) => {
  // MovieDB related Data
  const {selectedGenres, setSelectedGenres, filteredMovies, setFilteredMovies} = useContext(MovieDataContext);
  const [sortedMovies, setSortedMovies] = useState([]);

  // Interaction related
  const ResultsContainerRef = useRef(null);
  const [isStickyCellVisible, setIsStickyCellVisible] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(ResultsContainerRef.current.scrollTop);
  };

  useEffect(() => {
    if (ResultsContainerRef.current) {
      ResultsContainerRef?.current.addEventListener("scroll", handleScroll);
      return () => {
        if (ResultsContainerRef.current){
        ResultsContainerRef.current.removeEventListener("scroll", handleScroll);
      }}
    } 
  }, [ResultsContainerRef]);

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

          <div ref={ResultsContainerRef} className='search-and-results-container' id='hide-scrollbar-y'>
            <div className='container-layout'>
              <div className={isStickyCellVisible ? "top-left-cell" : "top-left-cell-scrolled"}>
                <div className='search-inputs'>
                  <div className='search-sort-wrapper'>
                    <Button1 type='switch' title='Sort' setSortedMovies={setSortedMovies} setFilteredMovies={setFilteredMovies} filteredMovies={filteredMovies} />
                    <Button1 type='trigger' title='Trending' setFilteredMovies={setFilteredMovies} filteredMovies={filteredMovies}/>
                    <SearchBar sortedMovies={sortedMovies}/>
                  </div>
                  <GenreSelector/>
                </div>
              </div>
              {filteredMovies?.map((movie, index) => (
                <MoviePreview movie={movie} key={index}/>
              ))}
            </div>
          </div>

        
      
    </div>
  )
}

export default SearchArea