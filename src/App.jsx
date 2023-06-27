import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

//Pages
import SearchPage from './pages/SearchPage';
import HomePage from './pages/HomePage/HomePage';

// API related imports
import { DiscoveredMovies, TrendingMovies, MovieGenres } from './API'
import { fetchedData } from './API'

// Context imports
import { MovieDataContext, AppContext } from './assets/Context'
import FloatBar from './components/Navigation/FloatBar';
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';


const App = () => {

  // APP Data
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [trendsTriggered, setTrendsTriggered] = useState(false);
  const [searchEffect, setSearchEffect] = useState(false);

  const [active, setActive] = useState('Home');

  // API Data
  const [discoveredMovies, setDiscoveredMovies] = useState([]);
  const [trending, setTrending] = useState([]);
  const [movieGenres, setMovieGenres] = useState([]);
  const [apiLoading, setApiLoading] = useState(true);

  // API related Functions

  const getAPI_data = async () => {
    const discoveredMovies = await DiscoveredMovies;
    const trendingMovies = await TrendingMovies;
    const movieGenres = await MovieGenres;

    
    setTrending(trendingMovies.results);
    setDiscoveredMovies(discoveredMovies);
    setMovieGenres(movieGenres.genres);
    
  };

  // API related Effects

  useEffect(() => {
    getAPI_data();
  }, []);

  useEffect(() => {
    discoveredMovies ? discoveredMovies.map(async (movie) => {

      const response = await fetchedData(`https://api.themoviedb.org/3/movie/${movie.id}`);
      setMovies((prev) => [...prev, response]);

    }) : console.log("No Movie Data");

    trending ? trending.map(async (movie) => {

      const response = await fetchedData(`https://api.themoviedb.org/3/movie/${movie.id}`);
      setTrendingMovies((prev) => [...prev, response]);

    }) : console.log("No Movie Data");

  }, [discoveredMovies])





  return (
    <AppContext.Provider value={{trendsTriggered, setTrendsTriggered,
                                 searchEffect, setSearchEffect,
                                 active, setActive}}>
      <MovieDataContext.Provider value={{movies, trendingMovies, movieGenres,
                                        filteredMovies, setFilteredMovies,
                                        selectedGenres, setSelectedGenres }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/search' element={<SearchPage/>}/>
            <Route path='/movie/:id' element={<MovieDetailsPage/>}/>
          </Routes>
        </BrowserRouter>
      </MovieDataContext.Provider>
    </AppContext.Provider>
  )
}

export default App