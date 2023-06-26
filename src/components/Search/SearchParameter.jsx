import React, { useContext, useState } from "react";
import { InteractionContext, MovieDataContext } from "../../Context";
import './CSS/SearchParameter.css';
import Button from "./Elements/Button";

const SearchParameter = () => {
    const [currentSlide] = useState(0);
    const { genresMovie } = useContext(MovieDataContext);
    const { clickedGenre } = useContext(InteractionContext);
    


    
      const renderButtons = () => {
        
        return Array.from({ length: genresMovie.length }).map((_, index) => (
          genresMovie.length > 0 ?
          <Button type='Genre' clickedGenre={clickedGenre} key={genresMovie[index].id} genresMovie={genresMovie} index={index} link={`/search/genre=${genresMovie[index+currentSlide].name}`}/> :
          <h2 key={`Loading-${index}`}>Loading</h2>
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

export default SearchParameter