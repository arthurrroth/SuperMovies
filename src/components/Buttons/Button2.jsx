import React, { useContext, useState } from 'react'
import { MovieDataContext } from '../../assets/Context'

const Button2 = ({selectedGenres, setSelectedGenres, index}) => {
  const {movieGenres} = useContext(MovieDataContext);
  const [isClicked, setClicked] = useState(false);

  const handleClick = () => {
    if (isClicked) {
        setClicked(false);
    } else {
        setClicked(true);
    }
   };

   const handleGenreSelect = (buttonGenreID) => {
    if (selectedGenres.includes(buttonGenreID)) {
      let updatedArr = selectedGenres.slice();
      updatedArr = updatedArr.filter((genreID) => genreID != buttonGenreID);
      setSelectedGenres(updatedArr);
      console.log({updatedArr});
    } else {
      setSelectedGenres((prev)=>[...prev, buttonGenreID ]);
    }
  }

  return (
    <button 
    className={isClicked ? "genre-btn-active" : "genre-btn"} 
    onClick={() => { 
      handleGenreSelect(movieGenres[index].id);
      handleClick();
      }}>
    
    {movieGenres[index].name}
    
  </button>
  )
}

export default Button2