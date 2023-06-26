import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import HomePage from './pages/HomePage'
import MovieDetailsPage from './pages/MovieDetailsPage'
import VideoPlayerPage from './pages/VideoPlayerPage'
import { MovieDataContext, InteractionContext } from './Context'
import {  DiscoveredMovies, Genres_Movies } from './API/config/required';
import { fetchedData } from './API/config/required'
import SearchPage from './pages/SearchPage'


const App = () => {
  const [discoveredMovies, setDiscoveredMovies] = useState([]);
  const [detailedMovies, setDetailedMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState();
  const [genresMovie, setGeneresMovie] = useState([]);
  const [clickedGenre, setClickedGenre] = useState([]);
  const [favouritedMovies, setFavMovies] = useState(detailedMovies);
  const [downlaodedMovies, setDownloadedMovies] = useState(detailedMovies);
  const [filteredMovies, setFilteredMovies] = useState(detailedMovies);
    
  const run_Requiered = async () => {

      const Movies = await DiscoveredMovies;
      const MovieGenres = await Genres_Movies;
      setDiscoveredMovies(Movies)
      setGeneresMovie(MovieGenres.genres);
  
    };

    useEffect(() => {
        
        if (discoveredMovies) {
            discoveredMovies.map(async (movie) => {
              // Fetch Detailed Movie Data
                const response = await fetchedData(`https://api.themoviedb.org/3/movie/${movie.id}`);
                setDetailedMovies((prev) => [...prev, response]);
              })
        };
    }, [ discoveredMovies ]);
    

  useEffect(() => {
    run_Requiered();
  }, [])

  return (
    <InteractionContext.Provider value={{clickedGenre, setClickedGenre}}>
        <MovieDataContext.Provider value={{detailedMovies, setDetailedMovies,
                                           selectedMovie, setSelectedMovie,
                                           genresMovie, favouritedMovies, 
                                           setFavMovies, downlaodedMovies, 
                                           setDownloadedMovies, filteredMovies, setFilteredMovies}}>
          <BrowserRouter>
            <Routes>
              <Route path='/landing' element={<LandingPage/>}/>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/search' element={<SearchPage/>}/>
              <Route path='/movie/:id' element={<MovieDetailsPage/>}/>
              <Route path='/movie/:id/video-player' element={<VideoPlayerPage/>}/>
            </Routes>
          </BrowserRouter>
        </MovieDataContext.Provider>
      </InteractionContext.Provider>
      
 
  )
}

export default App

