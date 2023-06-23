import React, { useContext, useState } from "react";
import { InteractionContext, MovieDataContext } from "../Context";
import './Carousel.css'
import { Link } from "react-router-dom";
const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { genresMovie } = useContext(MovieDataContext);
  const { clickedGenre, setClickedGenre } = useContext(InteractionContext);
  const totalSlides = 19;

  const handleArrowClick = (direction) => {
    if (direction === "left") {
      setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : totalSlides - 4);
    } else {
      setCurrentSlide((currentSlide + 1) % (totalSlides - 3));
    }
  };

  const handleGenreSelect = (button) => {
    if (clickedGenre.includes(button)) {
      let updatedArr = clickedGenre.slice();
      updatedArr = updatedArr.filter((genreID) => genreID != button);
      setClickedGenre(updatedArr);
      console.log({updatedArr});
    } else {
      setClickedGenre((prev)=>[...prev, button ]);
    }
    console.log({clickedGenre});
  }

  const renderButtons = () => {
    
    return Array.from({ length: 4 }).map((_, index) => (
      genresMovie.length > 0 ?
      <Link to={`/search/genre=${genresMovie[index+currentSlide].name}`} key={index}>
        <button 
          className={clickedGenre.includes(genresMovie[index+currentSlide].id)? "genre-btn-active" : "genre-btn"} 
          id={genresMovie[index+currentSlide].id}
          onClick={() => handleGenreSelect(genresMovie[index+currentSlide].id)}
        >
          {
            genresMovie[index+currentSlide].name
          }
          
        </button>
      </Link> :
      <h2 key={`Loading-${index}`}>Loading</h2>
    ));
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <button className="btn-arrow" onClick={() => handleArrowClick("left")}>&lt;</button>
      <div style={{ display: "flex" }}>{renderButtons()}</div>
      <button className="btn-arrow" onClick={() => handleArrowClick("right")}>&gt;</button>
    </div>
  );
};

export default Carousel;
