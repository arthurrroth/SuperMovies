import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import HomePage from './pages/HomePage'
import SearchResultPage from './pages/SearchResultPage'
import MovieDetailsPage from './pages/MovieDetailsPage'
import VideoPlayerPage from './pages/VideoPlayerPage'
import { MovieDataContext } from './Context'

const App = () => {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {

  //   const optionsGET = {
  //     method: 'GET',
  //     headers: {
  //       accept: 'application/json',
  //       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZTgxODk3NTgzMWEwMTQwOTQ0NGVlMzU1NGU0ODI3ZCIsInN1YiI6IjY0OTJjYTAxNGJhNTIyMDBhYzI2ZTgzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FvTDHQ1-lJjV5xNiQkWwVMBxwynndsMqu8P6U-LituE'
  //     }
  //   };

  // fetch('https://api.themoviedb.org/3/authentication', optionsGET)
  // .then(response => response.json())
  // .then(response => console.log(response))
  // .catch(err => console.error(err));

  // fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', optionsGET)
  // .then(response => response.json())
  // .then(JSONresponse => {console.log(JSONresponse); setMovieData(JSONresponse.results)})
  // .catch(err => console.error(err));

    

  }, [])

  return (
    <MovieDataContext.Provider value={{movieData, setMovieData}}>
      <BrowserRouter>
        <Routes>
          <Route path='/landing' element={<LandingPage/>}/>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/search' element={<SearchResultPage/>}/>
          <Route path='/movie/:id' element={<MovieDetailsPage/>}/>
          <Route path='/movie/:id/video-player' element={<VideoPlayerPage/>}/>
        </Routes>
      </BrowserRouter>
    </MovieDataContext.Provider>
  )
}

export default App

