import React, { useContext } from 'react'
import './GenreSelector.css'
import Button2 from '../Buttons/Button2'
import { MovieDataContext } from '../../assets/Context'

const GenreSelector = () => {
  const {movieGenres, selectedGenres, setSelectedGenres} = useContext(MovieDataContext);


  const renderButtons = () => {
    return Array.from({length: movieGenres.length}).map((_, index) => (
      movieGenres.length > 0 ?
      <Button2 selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres} index={index} key={index}/> :
      <h3 key={index}>Loading</h3>
    ));
  };

  return (
    <div className="element-wrapper">
    <div className="effect-wrapper-horizontal">
      <div className="fade-right"></div>
      <div className="fade-left"></div>
      <div className="component-container" id="hide-scrollbar-x" >
      {renderButtons()}</div>
    </div>
  </div>
  );
};

export default GenreSelector