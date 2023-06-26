import React, { useContext } from 'react';
import { InteractionContext, MovieDataContext } from "../../../Context";
import { useState } from 'react';
import '../CSS/Button.css'

const Button = (props) => {

    const { genresMovie } = useContext(MovieDataContext);
    const { clickedGenre, setClickedGenre } = useContext(InteractionContext);
    const [isClicked, setClicked] = useState(false);

    const handleGenreSelect = (button) => {
        if (clickedGenre.includes(button)) {
          let updatedArr = clickedGenre.slice();
          updatedArr = updatedArr.filter((genreID) => genreID != button);
          setClickedGenre(updatedArr);
          console.log({updatedArr});
        } else {
          setClickedGenre((prev)=>[...prev, button ]);
        }
      }


   const handleClick = () => {
    if (isClicked) {
        setClicked(false);
    } else {
        setClicked(true);
    }
   }

  return (
        <>
        {props.type == 'Genre' ? 
            <button 
              className={isClicked ? "genre-btn-active" : "genre-btn"} 
              onClick={() => { 
                handleGenreSelect(genresMovie[props.index].id);
                handleClick();
                }}>
              
              {
                props.genresMovie[props.index].name
              }
              
            </button>
             : 
          
          <button 
              className={isClicked ? "sort-btn-active" : "sort-btn"} 
              onClick={() => {handleClick()}}>
              
              {props.title}
              
            </button> }
        </>
       
   
  )
}

export default Button
