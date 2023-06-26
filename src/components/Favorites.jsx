import './Favorites.css'

import { MovieDataContext } from '../Context';
import { useContext, useState, useEffect } from 'react';
import Star from '../assets/img/Star.png';


const Favorites = () => {
    const {favouritedMovies, setFavMovies} = useContext(MovieDataContext);
    const {detailedMovies} = useContext(MovieDataContext);


    useEffect(() => {
        setFavMovies(detailedMovies)
    }, [])

    useEffect(() => {
        console.log({favouritedMovies});
    }, [favouritedMovies])

    return ( 
        <section>
        <div className="container">
          <article className='fav-movie-container'>
            {favouritedMovies.map(movie => (
              <div className='fav-movie' key={movie.id}>
                <div className='fav-img-container'>
                  <img className='fav-img' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                </div>
                <div className='fav-info-container'>
                  <div className='fav-title'>
                    <h5>{movie.title}</h5>
                  </div>
                  <div className='fav-description'>
                    <img src={Star} alt="" />
                    <p>{(movie.vote_average).toFixed(1)}</p>
                    <p>•</p>
                    <p>{(movie.release_date).split("-")[0]}</p>
                    <p>•</p>
                    <p>{movie.genres[0].name}</p>
                    <p>•</p>
                    <p>{movie.runtime} min.</p>
                  </div>
                </div>
              </div>
            ))}
          </article>
        </div>
      </section>
     );
}
 
export default Favorites;