import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/landingpage/LandingPage'
import HomePage from './pages/HomePage/HomePage'
import SearchPage from './pages/SearchPage/SearchPage'
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage'
import VideoPlayerPage from './pages/VideoPlayerPage/VideoPlayerPage'
import DownloadPage from './pages/downloadpage/DownloadPage'
import FavoritePage from './pages/favoritepage/FavoritePage'
import ProfilePage from './pages/profilepage/ProfilePage'
import { MovieDataContext, InteractionContext } from './Context'
import {  DiscoveredMovies, Genres_Movies } from './API/config/required';
import { fetchedData } from './API/config/required'
import LoadingPage from './pages/loadingpage/LoadingPage'


const App = () => {
  const [discoveredMovies, setDiscoveredMovies] = useState([]);
  const [detailedMovies, setDetailedMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState();
  const [genresMovie, setGeneresMovie] = useState([]);
  const [clickedGenre, setClickedGenre] = useState([]);
  const [favouritedMovies, setFavMovies] = useState([]);
  const [downloadedMovies, setDownloadedMovies] = useState([]);
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
                                           setFavMovies, downloadedMovies, 
                                           setDownloadedMovies, filteredMovies, setFilteredMovies}}>
          <BrowserRouter>
            <Routes>
              <Route path='/landing' element={<LandingPage/>}/>
              <Route path='/loading' element={<LoadingPage/>}/>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/search/' element={<SearchPage/>}/>
              <Route path='/movie/:id' element={<MovieDetailsPage/>}/>
              <Route path='/movie/:id/video-player' element={<VideoPlayerPage/>}/>
              <Route path='/download' element={<DownloadPage/>}/>
              <Route path='/favorite' element={<FavoritePage />} />
              <Route path='/profile' element={<ProfilePage />} />
            </Routes>
          </BrowserRouter>
        </MovieDataContext.Provider>
      </InteractionContext.Provider>
  )
}

export default App

