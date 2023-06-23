import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import HomePage from './pages/HomePage'
import SearchResultPage from './pages/SearchResultPage'
import MovieDetailsPage from './pages/MovieDetailsPage'
import VideoPlayerPage from './pages/VideoPlayerPage'
import DownloadPage from './pages/downloadpage/DownloadPage'
import FavoritePage from './pages/favoritepage/FavoritePage'
import ProfilePage from './pages/profilepage/ProfilePage'
import { MovieDataContext } from './Context'
import {  DiscoveredMovies} from './API/config/required';
import { fetchedData } from './API/config/required'

const App = () => {
  const [discoveredMovies, setDiscoveredMovies] = useState([]);
  const [detailedMovies, setDetailedMovies] = useState([]);

    const run_Requiered = async () => {

      const Movies = await DiscoveredMovies;
      setDiscoveredMovies(Movies)
      setDetailedMovies(detailedMovies);
  
    };

    // Load Detailed Movie Data based on the Discovered Movies fetch
    useEffect(() => {
        if (discoveredMovies) {
            discoveredMovies.map(async (movie) => {
                const response = await fetchedData(`https://api.themoviedb.org/3/movie/${movie.id}`);
                setDetailedMovies((prev) => [...prev, response]);
            
              })
        };
        
      console.log({discoveredMovies});
      
    }, [ discoveredMovies ]);

  useEffect(() => {
    console.log({detailedMovies});
    console.log(detailedMovies.length);
    

  },[detailedMovies])
    

  useEffect(() => {

  run_Requiered();

  }, [])

  return (
    
    
      <MovieDataContext.Provider value={{detailedMovies, setDetailedMovies}}>
        <BrowserRouter>
          <Routes>
            <Route path='/landing' element={<LandingPage/>}/>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/search' element={<SearchResultPage/>}/>
            <Route path='/movie/:id' element={<MovieDetailsPage/>}/>
            <Route path='/movie/:id/video-player' element={<VideoPlayerPage/>}/>
            <Route path='/download' element={<DownloadPage/>}/>
            <Route path='/favorite' element={<FavoritePage />} />
            <Route path='/profile' element={<ProfilePage />} />
          </Routes>
        </BrowserRouter>
      </MovieDataContext.Provider>
 
  )
}

export default App

