import { useState } from 'react';
import SearchIcon from '../assets/icons/SearchIcon';
import '../pages/HomePage.css'

const SearchSort = () => {
    const [fill, setFill] = useState('#A4A3A3');
    const [SearchBarFill, setSearchBarFill] = useState({ '--border-color-1': 'rgb(250, 240, 240)' });
    const [placeholderColor, setPlaceholderColor] = useState({'--placeholder-color' : 'rgb(150, 150, 150)'})
    
    const handleFocus = () => {
        setFill('red');
        setSearchBarFill({ '--border-color-1': 'rgb(255, 164, 164)' });
        setPlaceholderColor({'--placeholder-color' : 'rgb(255, 142, 142)'})

    }
    const handleBlur = () => {
        setFill('#A4A3A3');
        setSearchBarFill({ '--border-color-1': 'rgb(250, 240, 240)' });
        setPlaceholderColor({'--placeholder-color' : 'rgb(150, 150, 150)'})


    }

  return (
    <div className='disovery'>
        <div className='search-bar' style={SearchBarFill} >
            <input 
                type="text"
                placeholder='Search' 
                style={placeholderColor}
                onFocus={() => handleFocus()}
                onBlur={() => handleBlur()}    
            />
                
            <SearchIcon fill={fill}/>
        </div>
    
    </div>
  )
}

export default SearchSort