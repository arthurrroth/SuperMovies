import React from 'react'
import '../CSS/MoviePreview.css'
import Download from '../../../assets/icons/download_svg/Download';
import Favorite from '../../../assets/icons/favorite_svg/Favorite';
import { useNavigate } from 'react-router';
import { useContext } from 'react';
import { MovieDataContext } from '../../../Context';

const MoviePreview = ({movie, index}) => {
    const dateObj = new Date(movie.release_date);
    const year = dateObj.getFullYear();
    const navigate = useNavigate();


    const { downloadedMovies, setDownloadedMovies } = useContext(MovieDataContext);
    const { favouritedMovies, setFavMovies } = useContext(MovieDataContext);



    const handleDownload = () => {
      setDownloadedMovies((prevMovies) => [...prevMovies, movie]);
      console.log(movie);
    };

    const handleFavorite = () => {
      setFavMovies((prevMovies) => [...prevMovies, movie]);
      console.log(movie);
    };


  return (
    <div className='movie-preview'>
        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} className="preview-img" />
        <article onClick={() => {navigate(`/movie/${movie.id}`)}}>
            <h4>{movie.original_title}</h4>
            <div className='movie-details'>
                <h6> ⭐️{movie.vote_average.toFixed(1)}</h6>
                <h6>●</h6>
                <h6>{year}</h6>
                <h6>●</h6>
                <h6>{movie.genres[0].name}</h6>
                <h6>●</h6>
                <h6>{movie.runtime} min.</h6>
            </div>
        </article>
        <div className='saveLoad'>
            <Download handleDownload={() => handleDownload()} active="Preview"/>
            <Favorite handleFavorite={() => handleFavorite()} active="Favorite"/>
        </div>
        
    </div>
  )
}

export default MoviePreview