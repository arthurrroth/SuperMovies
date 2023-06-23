import { useContext, useEffect, useState } from 'react';
import { MovieDataContext } from '../Context';
import { useParams } from 'react-router';

const MovieDetailsPage = () => {
const { detailedMovies } = useContext(MovieDataContext);
const {selectedMovie, setSelectedMovie} = useContext(MovieDataContext);
// const { id } = useParams();
const [id, setId] = useState(385687);



  useEffect(() => {
    if (detailedMovies) {
      let selectedMovie = detailedMovies.filter(movie => {
        return movie.id === parseInt(id) ;
      });
      
      setSelectedMovie(selectedMovie[0]);
    }
  }, [detailedMovies]);

  useEffect(() => {
    console.log({selectedMovie});
    console.log(detailedMovies);

  }, [selectedMovie])

  return (
    <div>
      {selectedMovie ? 
      <div>
        <h1>{selectedMovie.original_title}</h1>
        <img src={"https://image.tmdb.org/t/p/original" + selectedMovie.poster_path} alt="" />
      </div>
       : <h2>Not Found</h2>}
      
    </div>
    
  )
}

export default MovieDetailsPage