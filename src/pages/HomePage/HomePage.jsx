// HomePage.js
import React, {useState, useContext, useEffect} from 'react';
import styles from './HomePage.module.css';
import { useNavigate } from 'react-router-dom';
import FloatBar from '../../components/Navigation/FloatBar';
import { MovieDataContext } from '../../assets/Context';
import Star from '../../assets/img/Star.png';
import MoviePreview from '../../components/MoviePreview/MoviePreview';

const HomePage = () => {
  const { trendingMovies } = useContext(MovieDataContext);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  const [movies, setMovies] = useState([]);
  const [activeMovie, setActiveMovie] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
          setCurrentMovieIndex((prevMovie) => (prevMovie + 1) % trendingMovies.length);
        }, 8000);
    
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
    <div className={styles.homePageContainer}>
      <div className={styles.titleDisplay}>
        <div className={styles.darkFade}></div>
        <article className={styles.display} onClick={nextMovie}>
          {currentMovie && (
            <div key={currentMovie.id} className={styles.imgText}>
              <img src={`https://image.tmdb.org/t/p/w500${currentMovie.poster_path}`} alt={currentMovie.title} className="display-img" />
              <article>
              <h1>{currentMovie.title}</h1>
              <p>{currentMovie.overview}</p> 
              </article>
            
            </div>
          )}
        </article>
      </div>
      <div className={styles.trendingGrid} id="hide-scrollbar-x">
        <h2>Trending Movies</h2>
      {trendingMovies?.map((movie, index) => (
                 <div
                 key={index}
                 className={styles.gridItem}
                 style={{
                   "--animation-duration": `${trendingMovies.length * 2}s`,
                 }}
               >
                 <MoviePreview movie={movie} />
               </div>
              ))}
      </div>
      <div className={styles.floatBarWrapper}>
        <h1>.MOV</h1>
        <FloatBar/>
        <h1>.MOV</h1>
      </div>
      
    </div>
  );
};

export default HomePage;
