import React, { useState, useContext, useEffect } from 'react';
import SearchIcon from "../../../assets/icons/search_svg/SearchIcon";
import '../CSS/SearchBar.css';
import { MovieDataContext, InteractionContext } from '../../../Context';
import { useLocation, useNavigate } from 'react-router';


const SearchBar = () => {
    // Data
    const { detailedMovies } = useContext(MovieDataContext);
    const { clickedGenre } = useContext(InteractionContext);
    const { setFilteredMovies } = useContext(MovieDataContext)
    // Styling Variables
    const [SearchBarBorder, setSearchBarBorder] = useState({ '--border-color-1': 'rgb(250, 240, 240)' });
    const [fill, setFill] = useState('#A4A3A3');
    const [placeholderColor, setPlaceholderColor] = useState({'--placeholder-color' : 'rgb(150, 150, 150)'});
   
    // Interaction Variables
    const [isFocused, setFocused] = useState(false)
    const [currentSearchInputString, setCurrentSearchInputString] = useState("");
   
    // Navigation Variables
    const navigate = useNavigate();
    const location = useLocation();


    const handleSearchInput = (input) => {
        setCurrentSearchInputString(input);
      };

    const handleNavigate = (event) => {
        console.log({location});
        if (event.key == 'Enter' && location != '/search') {
            navigate('/search')
        }
    }
   
    const handleFocus = () => {
        setFill('red');
        setSearchBarBorder({ '--border-color-1': 'rgb(255, 164, 164)' });
        setPlaceholderColor({'--placeholder-color' : 'rgb(255, 142, 142)'});
        setFocused(true);
    
    };
    
      const handleBlur = () => {
        setFill('#A4A3A3');
        setSearchBarBorder({ '--border-color-1': 'rgb(250, 240, 240)' });
        setPlaceholderColor({'--placeholder-color' : 'rgb(150, 150, 150)'});
        setFocused(false);
    
    };
    
      const handleMouseEnter = () => {
        if (isFocused) {
            
        } else {
            setFill('#ac8787');
            setSearchBarBorder({ '--border-color-1': 'rgb(255, 216, 216)' });
            setPlaceholderColor({'--placeholder-color' : 'rgb(150, 150, 150)'})
    
        }
    };
    
    const handleMouseLeave = () => {
        if (isFocused) {
    
        } else {
            setFill('#A4A3A3');
            setSearchBarBorder({ '--border-color-1': 'rgb(250, 240, 240)' });
            setPlaceholderColor({'--placeholder-color' : 'rgb(150, 150, 150)'})
        }
    };

    useEffect(() => {
        // Filter movies whenever selected genres or search input changes
        const filterMovies = () => {
          const filteredMovies = detailedMovies.filter((movie) => {
            const genreMatch = clickedGenre?.every((selectedGenre) =>
              movie.genres.some((movieGenre) => movieGenre.id === selectedGenre)
            );
    
            const titleMatch =
              !currentSearchInputString ||
              movie.title
                .toLowerCase()
                .startsWith(currentSearchInputString.toLowerCase());
    
            return genreMatch && titleMatch;
          });
    
          setFilteredMovies(filteredMovies);
        };
    
      
    
        filterMovies();
        
      }, [ clickedGenre, currentSearchInputString]);

  return (

    <div className='search-bar' style={SearchBarBorder} >
            <input 
            type="text"
            placeholder='Search' 
            style={placeholderColor}
            onChange={(e) => {handleSearchInput(e.target.value)}}
            onFocus={() => handleFocus()}
            onBlur={() => handleBlur()}
            onMouseEnter={() => handleMouseEnter()}   
            onMouseLeave={() => handleMouseLeave()}
            onKeyDown={(event) => handleNavigate(event)}
            />
            <SearchIcon fill={fill}/>
        </div>
  )
}

export default SearchBar