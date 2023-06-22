import React, { useContext, useEffect, useState }from 'react'
import './MovieDetailsPage.css'

import { Link, useParams } from 'react-router-dom';

// Icons
import BackArrow from '../../../public/BackArrow-Detail.svg'
import Star from '../../../public/Star.svg'
import PlayBtn from '../../../public/PlayBtn.svg'

// NavBar
import NavBar from '../../components/NavBar.jsx'

// import { MovieDataContext } from '../../Context'


const MovieDetailsPage = () => {
  // const { movieData } = useContext(MovieDataContext)
   const params = useParams()
   const [detailMovie, setDetailMovie] = useState()
   const [translationData, setTranslationData] = useState()

   const [seeMore, setSeeMore] = useState(false)

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMmRiNjAwMDEyNjk3N2U0MmU2NjZkODg2NTM5NmFjMSIsInN1YiI6IjY0OTNmNjlhNmI1ZmMyMDEyYjIwYzhjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S-55j_7x8y5K9Ow4hyhOMxTYC-qrXOG4696oZJci2wo'
    }
  };
  
// ##### params.movieID verknüpfen statt 550
  useEffect(() => {

    // # Fetch für Detail Daten
    fetch(`https://api.themoviedb.org/3/movie/550?language=en-US`, options)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setDetailMovie(data)
    })
    .catch(err => console.error(err));

    // # Fetch für Languages
    fetch('https://api.themoviedb.org/3/movie/550/translations', options)
  .then(response => response.json())
  .then(translationData => {
    console.log(translationData);
    setTranslationData(translationData)
    })
  .catch(err => console.error(err));
  },[])

  return (
    <section className='detailPage'>

      {/* <div className='detailBackgroundContainer'
                style={{
                    backgroundImage: url(`https://image.tmdb.org/t/p/original${detailMovie.poster_path}`)
                }}> </div> */}



      {/* ##### Navigation zurück zur Suche ggf auch zurück zur HomePage ###### */}
      <Link to={"/search"}><img src={BackArrow} alt="Go Back" /></Link>
      {detailMovie ? (
        
        <article className='detailContent'>

          <img className='detailImg' src={`https://image.tmdb.org/t/p/original${detailMovie.poster_path}`} />       


          <div className='detailHeader'>
            <p>Movie Details</p>
            <h2>{detailMovie.title}</h2>

            <div className='detailHeaderInformation'>
              <div className='detailStarRating'>
                <img src={Star} alt="Star" />
                <h5>{(detailMovie.vote_average).toFixed(1)}</h5>
              </div>
                <p>•</p>
              <p>{detailMovie.release_date}</p>
                <p>•</p>
              <p>{detailMovie.genres[0].name}</p>
                <p>•</p>
              <p>{detailMovie.runtime} min</p>
            </div>
          </div>

          <h3>Overview</h3>
          <p>
            {seeMore ? `${detailMovie.overview}` : `${detailMovie.overview.substring(0, 150)}`}
            <button className="seeMoreBtn" onClick={() => setSeeMore(!seeMore)}>{seeMore ? "Show less" : "See more"}</button>
          </p>
  

          <h5>Genre</h5>
          {detailMovie.genres.map((genre, index) => {
            return(
              <p key={index}>{genre.name}</p>
            )
            })}

          <h5>Languages</h5>
          <p>{translationData.english_name.map((language, index) => {
            return(
              <p key={index}>{language}</p>
            )
          })}</p>

          {/* ##### LINK ANPASSEN ##### */}
          <Link className='detailPlayBtn' to={"//movie/:id/video-player"}> <img src={PlayBtn} alt='Play'/>
          Watch Trailer</Link>
        </article>
      ) : (
        <p>Loading Data...</p>
      )}
      
      <NavBar />
    </section>
  )
}

export default MovieDetailsPage