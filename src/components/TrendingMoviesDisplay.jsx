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
  const [activeMovie, setActiveMovie] = useState(0);


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
    }, 400500);

    return () => clearTimeout(timer);
  }, [currentMovieIndex, movies.length]);

  useEffect(() => {
    setActiveMovie(currentMovieIndex);
  }, [currentMovieIndex])

  const currentMovie = movies[currentMovieIndex];

  const circleClick = (i) => {
    setCurrentMovieIndex(i)
  }

  const nextMovie = () => {
    setCurrentMovieIndex((prevIndex) => (prevIndex + 1) % movies.length);
  };


  return (
    <section className="trending-container">
      <article className='trending-title'>
        <h3>Trending Movies</h3>
        <NavLink to={"/search"}><p>See all</p></NavLink>
      </article>

      <article className="Display" onClick={nextMovie}>
        {currentMovie && (
          <div key={currentMovie.id} className="img-container">
            <img src={`https://image.tmdb.org/t/p/w500${currentMovie.poster_path}`} alt={currentMovie.title} className="display-img" />
            <div className="title-container">
              <div className="title">
                <p>{currentMovie.title}</p> 
              </div>   
              <div className="rated">
                  <img src={Star} alt="" className="star" />
                  <p>{currentMovie.vote_average.toFixed(1)} / 10</p>                   
                </div>        
            </div> 
          </div>
        )}
      </article>

      <article className="circle-container">
              {movies.map((movie, i) => (
                <div key={movie.id}
                  className={`circle ${i === activeMovie ? "current-circle" : ""}`} onClick={() => circleClick(i)}>

                </div>
              ))}
      </article>
    </section>
  )
}

export default TrendingMoviesDisplay;