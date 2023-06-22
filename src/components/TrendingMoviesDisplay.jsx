import "./TrendingMoviesDisplay.css";

import React from 'react';
import { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";

import Star from '../../public/Star.png'

const TrendingMoviesDisplay = () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZGQ0YmE4ZDg5MjY0OGM1Mzc5ZmZhMDA0NjRhYjAwOSIsInN1YiI6IjY0OTJjNDA4NjVlMGEyMDBhZDFmYjlhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PBE2MH5AMkfp5u6L8711gO4A9YhAxPc4ULmklU9CFhY'
    }
  };

  const [movies, setMovies] = useState([]);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
      .then(response => response.json())
      .then(response => {
        console.log(response.results);
        setMovies(response.results.slice(0, 6));
      })
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentMovieIndex((prevMovie) => (prevMovie + 1) % movies.length);
    }, 4500);

    return () => clearTimeout(timer);
  }, [currentMovieIndex, movies.length]);

  const currentMovie = movies[currentMovieIndex];


  return (
    <section className="trending-container">
      <article className='trending-title'>
        <h2>Trending Movies</h2>
        <NavLink to={"/Search"}><p>See all</p></NavLink>
      </article>
      <article className="Display">
        {currentMovie && (
          <div key={currentMovie.id} className="img-container">
            <img src={`https://image.tmdb.org/t/p/w500${currentMovie.poster_path}`} alt={currentMovie.title} className="display-img" />
            <div className="vote">
            <div className="vote-container">
              <p>{currentMovie.title}</p>            
            </div>
                <img src={Star} alt="" className="star" />  
                <p>{currentMovie.vote_average.toFixed(1)}/10</p>            
              </div>  


          </div>
        )}
      </article>
    </section>
  )
}

export default TrendingMoviesDisplay;