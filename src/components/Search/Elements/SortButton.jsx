import React from 'react'
import { useState } from 'react';
import '../CSS/Button.css';

const SortButton = (props) => {
    const [isClicked, setClicked] = useState(false);

    const handleClick = () => {
        if (isClicked) {
            setClicked(false);
        } else {
            setClicked(true);
        }
       }

  return (
    <button 
        className={isClicked ? "sort-btn-active" : "sort-btn"} 
        onClick={() => {handleClick()}}>
        
        {props.title}
              
    </button>
  )
}

export default SortButton