import React, { useContext, useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import './TrendingMovies.css';
import Star from '../../assets/img/Star.png';
import { MovieDataContext } from '../../assets/Context';


const TrendingMoviesDisplay = () => {
    const { trendingMovies } = useContext(MovieDataContext);
    const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
    const [activeMovie, setActiveMovie] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
          setCurrentMovieIndex((prevMovie) => (prevMovie + 1) % trendingMovies.length);
        }, 4500);
    
        return () => clearTimeout(timer);
      }, [currentMovieIndex, trendingMovies.length]);
    
      useEffect(() => {
        setActiveMovie(currentMovieIndex);
      }, [currentMovieIndex])
    
      const currentMovie = trendingMovies[currentMovieIndex];
    
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
              {trendingMovies.map((movie, i) => (
                <div key={movie.id}
                  className={`circle ${i === activeMovie ? "current-circle" : ""}`} onClick={() => circleClick(i)}>

                </div>
              ))}
      </article>
    </section>
  )
}

export default TrendingMoviesDisplay