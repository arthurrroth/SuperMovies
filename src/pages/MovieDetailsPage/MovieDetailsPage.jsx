import './MovieDetailsPage.css'

import { useContext, useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { MovieDataContext } from '../../Context';

// Icons
import BackArrow from '../../assets/icons/BackArrow-Detail.svg'
import Star from '../../assets/icons/Star.svg'
import PlayBtn from '../../assets/icons/PlayBtn.svg'

// NavBar
import NavBar from '../../components/NavBar/FloatNavBar'

// # ID anpassen ==============
const MovieDetailsPage = () => {
  const navigate = useNavigate();
  const { detailedMovies } = useContext(MovieDataContext);
  const [selectedMovie, setSelectedMovie] = useState();
<<<<<<< HEAD
  // const { id } = useParams()
  const [id, setId] = useState([]);
  const [seeMore, setSeeMore] = useState(false)
  
=======
  const { id } = useParams();
  const [seeMore, setSeeMore] = useState(false);
>>>>>>> ddeaddf31bd405c1882586e14eeb041764d5741d
  
    // Get data
    useEffect(() => {
      if (detailedMovies) {
        let selectedMovie = detailedMovies.filter(movie => {
          return movie.id === parseInt(id);
        });
    
        setSelectedMovie(selectedMovie[0]);
      }
<<<<<<< HEAD
    }, [detailedMovies, id]);
    
    useEffect(() => {
      console.log({selectedMovie});
      console.log(detailedMovies);
    
    }, [selectedMovie])
=======
    }, []);
>>>>>>> ddeaddf31bd405c1882586e14eeb041764d5741d

    // Minutes in hours:minutes 
    const toHHMM = (totalMinutes) => {
      const minutes = totalMinutes % 60;
      const hours = Math.floor(totalMinutes / 60);
      return `${padTo2Digits(hours)}h ${padTo2Digits(minutes)}m`;
    };
    const padTo2Digits = (num) => {
      return num.toString().padStart(1, '0');
    };
    

  return (
    <section className='movieDetailPage'>
    {selectedMovie ? (
      <article className='detailPage'>
        <div className='detailBackgroundContainer'
          style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${selectedMovie.poster_path})`}} >
        
          <button onClick={() => navigate(-1)} className='detailGoBack'><img src={BackArrow} alt="Go Back" /></button>

          <div className='detailHeader'>
            <p>Movie Details</p>
            <h2>{selectedMovie.title}</h2>

            <div className='detailHeaderInformation'>
              <div className='detailStarRating'>
                <img src={Star} alt="Star" />
                <h5>{(selectedMovie.vote_average).toFixed(1)}</h5>
              </div>
                <p className='detailBigDot'>•</p>
              <p>{selectedMovie.release_date}</p>
                <p className='detailBigDot'>•</p>
              <p>{selectedMovie.genres[0].name}</p>
                <p className='detailBigDot'>•</p>
              <p>{toHHMM(selectedMovie.runtime)}</p>
            </div>

          </div>


          <article className='detailContent'>
            <h3>Overview</h3>
            <p className='detailOverview'>
              {seeMore ? `${selectedMovie.overview}` : `${selectedMovie.overview.substring(0, 130)}`}
              <button className="seeMoreBtn" onClick={() => setSeeMore(!seeMore)}>{seeMore ? "Show less" : "See more..."}</button>
            </p>
      
            <div className='detailGenreLanguage'>
              <h5>Genres</h5>
              <div className='genresLanguageOutput'>
                {selectedMovie.genres.map((genre, index) => {
                  return(
                    <p key={index}>{genre.name}{index === selectedMovie.genres.length - 1 ? "" : ", "}</p>
                  )
                })}
              </div>
            </div>

            <div className='detailGenreLanguage'>
              <h5>Languages</h5>
              <div className='genresLanguageOutput'>
                {selectedMovie.spoken_languages.map((language, index) => {
                  return(
                    <p key={index}>{language.english_name}{index === selectedMovie.spoken_languages.length - 1 ? "" : ", "}</p>
                  )
                })}
              </div>
            </div>

            <Link to={`/movie/${id}/video-player`} className='detailPlayBtn'> <img src={PlayBtn} alt='Play'/>
            Watch Trailer</Link>

          <div className='detailNav'>
          <NavBar />
          </div>

          </article>

        </div>
      </article>

      ) : (
        <section>
          <h2 className='detailLoading'>Loading Data... 🍿</h2>
          <div className='detailNav'>
            <NavBar />  
          </div>
        </section>
      )} 
    </section>
  )
}

export default MovieDetailsPage