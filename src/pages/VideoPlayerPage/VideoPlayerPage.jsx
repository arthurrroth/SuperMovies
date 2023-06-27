import './VideoPlayerPage.css'
import BackArrow from '../../assets/icons/BackArrow-Detail.svg'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// # ID anpassen ==============
const VideoPlayerPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [videoLink, setVideoLink] = useState();

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZTgxODk3NTgzMWEwMTQwOTQ0NGVlMzU1NGU0ODI3ZCIsInN1YiI6IjY0OTJjYTAxNGJhNTIyMDBhYzI2ZTgzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FvTDHQ1-lJjV5xNiQkWwVMBxwynndsMqu8P6U-LituE'
      }
    };
    
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(response => response.json())
      .then(videoData => {
        console.log(videoData)
        setVideoLink(videoData.results[0].key)
      })
      .catch(err => console.error(err));
  },[])
  console.log(id)

  return (
    <>
    <button onClick={() => navigate(-1)} className='detailGoBack'><img src={BackArrow} alt="Go Back" /></button>

    <div className='videoContainer'>
      <iframe
        className='trailerVideo'
        src={`https://www.youtube.com/embed/${videoLink}?&autoplay=1`}
        title="Trailer"
        fullscreen="true"
        allowFullScreen="allowFullScreen"
        frameBorder="0"
        gyroscope="true"
        picture-in-picture="true"
        width="100%"
        height="100%"
        ></iframe>
    </div>

    </>
  )
}

export default VideoPlayerPage