import './Downloads.css'

import { MovieDataContext } from '../Context';
import { useContext, useState, useEffect } from 'react';
import Star from '../assets/img/Star.png'

const Downloads = () => {
    const {downlaodedMovies, setDownloadedMovies} = useContext(MovieDataContext);
    const {detailedMovies} = useContext(MovieDataContext);

    useEffect(() => {
        setDownloadedMovies(detailedMovies)
    }, [])

    useEffect(() => {
        console.log({downlaodedMovies});
    }, [downlaodedMovies])

    return ( 
        <section>
        <div className="container">
          <article className='dl-movie-container'>
            {downlaodedMovies.map(movie => (
              <div className='dl-movie' key={movie.id}>
                <div className='dl-img-container'>
                  <img className='dl-img' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                </div>
                <div className='dl-info-container'>
                  <div className='dl-title'>
                    <h5>{movie.title}</h5>
                  </div>
                  <div className='dl-info'>
                    <div className='dl-description'>
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
              </div>
            ))}
          </article>
        </div>
      </section>
     );
}
 
export default Downloads;