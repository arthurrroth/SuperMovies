import React, { useContext, useEffect, useState } from 'react'
import { AppContext, MovieDataContext } from '../assets/Context'
import SearchArea from '../components/SearchArea/SearchArea';
import FloatBar from '../components/Navigation/FloatBar';
import { useParams } from 'react-router-dom';

const SearchPage = () => {
    // MovieDB Data
    const {movies, trendingMovies, movieGenres, setFilteredMovies, filteredMovies} = useContext(MovieDataContext);

    // Event related Data
    const [searchResultCount, setSearchResultCount] = useState(0);
    const [navEffect, setNavEffect] = useState();
    const {searchEffect} = useContext(AppContext);

    // Data Log
    useEffect(() => {
      console.log({movies});
      console.log({trendingMovies});
      console.log({movieGenres});
      setFilteredMovies(movies);
    }, [movies])

    useEffect(() => {
        setSearchResultCount(filteredMovies.length)
    },[filteredMovies]);

    

  return (
    <div className='page-container'>
        <div className='result-count'>
           <p>{searchResultCount} Movies</p> 
        </div>
        <SearchArea setNavEffect={setNavEffect}/>
        <FloatBar navEffect={navEffect}/>
    </div>
  )
}

export default SearchPage