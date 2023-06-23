import { useState } from 'react';
import SearchIcon from '../assets/icons/SearchIcon';
import '../pages/HomePage.css'
import Carousel from './Carousel';
import './SearchSort.css';

const SearchSort = () => {
    const [fill, setFill] = useState('#A4A3A3');
    const [SearchBarBorder, setSearchBarBorder] = useState({ '--border-color-1': 'rgb(250, 240, 240)' });
    const [placeholderColor, setPlaceholderColor] = useState({'--placeholder-color' : 'rgb(150, 150, 150)'});
    const [isFocused, setFocused] = useState(); 
    
    const handleFocus = () => {
        setFill('red');
        setSearchBarBorder({ '--border-color-1': 'rgb(255, 164, 164)' });
        setPlaceholderColor({'--placeholder-color' : 'rgb(255, 142, 142)'});
        setFocused(true);

    }
    const handleBlur = () => {
        setFill('#A4A3A3');
        setSearchBarBorder({ '--border-color-1': 'rgb(250, 240, 240)' });
        setPlaceholderColor({'--placeholder-color' : 'rgb(150, 150, 150)'});
        setFocused(false);

    }
    const handleMouseEnter = () => {
        if (isFocused) {
            
        } else {
            setFill('#ac8787');
            setSearchBarBorder({ '--border-color-1': 'rgb(255, 216, 216)' });
            setPlaceholderColor({'--placeholder-color' : 'rgb(150, 150, 150)'})

        }
        

    }

    const handleMouseLeave = () => {
        if (isFocused) {

        } else {
            setFill('#A4A3A3');
            setSearchBarBorder({ '--border-color-1': 'rgb(250, 240, 240)' });
            setPlaceholderColor({'--placeholder-color' : 'rgb(150, 150, 150)'})
        }

    }

  return (
    <div className='discovery'>
        <div className='search-bar' style={SearchBarBorder} >
            <input 
                type="text"
                placeholder='Search' 
                style={placeholderColor}
                onFocus={() => handleFocus()}
                onBlur={() => handleBlur()}
                onMouseEnter={() => handleMouseEnter()}   
                onMouseLeave={() => handleMouseLeave()}
            />
            <SearchIcon fill={fill}/>
        </div>
        <div>

        </div>
        <Carousel/>
    
    </div>
  )
}

export default SearchSort