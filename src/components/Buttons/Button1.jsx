import React, {useContext, useEffect, useState} from 'react';
import './Button.css';
import { AppContext, MovieDataContext } from '../../assets/Context';

const Button1 = ({type, title, setSortedMovies}) => {
  // Interaction related states
  const [isClicked, setClicked] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const {setTrendsTriggered} = useContext(AppContext);
  const {selectedGenres} = useContext(MovieDataContext);

  // Style related states
  const [btnTitle, setTitle] = useState(title);

  // Data
  const {movies, trendingMovies, filteredMovies, setFilteredMovies} = useContext(MovieDataContext);
  const [filteredMoviesBackUp, setBackup] = useState([]);

  const handleClick = () => {
    if (type == 'trigger'){

      isClicked ? setClicked(false) :
      setClicked(true);
   
    } else if (type == 'switch') {
        clickCount === 0 ? setClickCount(1) : // Default
        clickCount === 1 ? setClickCount(2) : // A-Z (red)
        clickCount === 2 ? setClickCount(3) : // Z-A (red)
        clickCount === 3 ? setClickCount(4) : // Date asc (yellow)
        clickCount === 4 ? setClickCount(5) : null // Date desc (yellow)
    }
  };

  // Show Trending Movies

  useEffect(() => {
    isClicked ? setFilteredMovies(trendingMovies) : setFilteredMovies(movies);
    isClicked ? setTrendsTriggered(true) : setTrendsTriggered(false);
  }, [isClicked])

  // Button Color Cycle

  useEffect(() => {
    console.log(selectedGenres.length);
    if (clickCount) {
      let sortedMovies;
      let data = filteredMovies.slice();

    switch (clickCount) {
      case 1:
        document.querySelector('.sort-btn-active').style.setProperty('--button-1a-bg-color', '#FC2121');
        document.querySelector('.sort-btn-active').style.setProperty('--button-1a-border-color', 'rgb(226, 16, 16)');
        document.querySelector('.sort-btn-active').style.setProperty('--button-1a-txt-color', 'rgb(158, 2, 2)');
        setTitle('A-Z');
        setBackup(filteredMovies);
          sortedMovies = data.sort((a, b) => {
          const titleA = a.title.toLowerCase();
          const titleB = b.title.toLowerCase();
          if (titleA < titleB) {
            return -1;
          }
          if (titleA > titleB) {
            return 1;
          }
          return 0;
        });
        console.log({sortedMovies});
        setFilteredMovies(sortedMovies);
        selectedGenres.length == 0 ? setSortedMovies(sortedMovies) :
        console.log('sus');
        break;
      
      case 2:
        setTitle('Z-A');
          sortedMovies =data.sort((a, b) => {
          const titleA = a.title.toLowerCase();
          const titleB = b.title.toLowerCase();
          if (titleA < titleB) {
            return 1;
          }
          if (titleA > titleB) {
            return -1;
          }
          return 0;
        });
        console.log({sortedMovies});
        setFilteredMovies(sortedMovies);
        selectedGenres.length == 0 ? setSortedMovies(sortedMovies) :
        console.log('sus');
        break;

      case 3:
        document.querySelector('.sort-btn-active').style.setProperty('--button-1a-bg-color', '#fcf121');
        document.querySelector('.sort-btn-active').style.setProperty('--button-1a-border-color', 'rgb(255, 217, 45)');
        document.querySelector('.sort-btn-active').style.setProperty('--button-1a-txt-color', 'rgb(158, 137, 2)');
        setTitle('Date⬇');
        sortedMovies = data.sort((a,b) => {
          const dateA = new Date(a.release_date);
          const dateB = new Date(b.release_date);
          return dateB - dateA;
        });
        console.log({sortedMovies});
        setFilteredMovies(sortedMovies);
        selectedGenres.length == 0 ? setSortedMovies(sortedMovies) :
        console.log('sus');
        break;

      case 4:
        document.querySelector('.sort-btn-active').style.setProperty('--button-1a-bg-color', '#fcf121');
        document.querySelector('.sort-btn-active').style.setProperty('--button-1a-border-color', 'rgb(255, 217, 45)');
        document.querySelector('.sort-btn-active').style.setProperty('--button-1a-txt-color', 'rgb(158, 137, 2)');
        setTitle('Date⬆');
        sortedMovies = data.sort((a,b) => {
          const dateA = new Date(a.release_date);
          const dateB = new Date(b.release_date);
          return dateA - dateB;
        });
        console.log({sortedMovies});
        setFilteredMovies(sortedMovies);
        selectedGenres.length == 0 ? setSortedMovies(sortedMovies) :
        console.log('sus');
        break;
      
      case 5:
        setTitle('Sort');
        setClickCount(0);
        setFilteredMovies(filteredMoviesBackUp);
        break;
    
      default:

        break;
    }}
  }, [clickCount])


  return (
    <button 
            className={isClicked || clickCount>0 ? 'sort-btn-active' : 'sort-btn'}
            onClick={() => handleClick()}>
            {btnTitle}
    </button>
  )
}

export default Button1