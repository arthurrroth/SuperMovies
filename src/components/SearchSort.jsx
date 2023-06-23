import React, { useState, useEffect } from "react";
import MoviDataContext 

const SearchSort = () => {
  // Global States
  const { detailedMovieData} = useContext(MovieDataContext);
  
  // Local States
  const [genreArray, setGenreArray] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [currentSearchInputString, setCurrentSearchInputString] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    // Filter movies whenever selected genres or search input changes
    const filterMovies = () => {
      const filteredMovies = detailedMovieData.filter((movie) => {
        const genreMatch = selectedGenres.some((selectedGenre) =>
          movie.genre.some((movieGenre) => movieGenre.name === selectedGenre)
        );

        const titleMatch =
          !currentSearchInputString ||
          movie.title
            .toLowerCase()
            .includes(currentSearchInputString.toLowerCase());

        return genreMatch && titleMatch;
      });

      setFilteredMovies(filteredMovies);
    };

    filterMovies();
  }, [detailedMovieData, selectedGenres, currentSearchInputString]);

  // Event handlers
  const handleGenreSelection = (genre) => {
    setSelectedGenres(genre);
  };

  const handleSearchInput = (input) => {
    setCurrentSearchInputString(input);
  };

  return (
      {/* Search UI Container */}
      <div className='search-interface'>
        {/* Input Area for filter options  // #+Keyword = generic filter button appears => moving up/down cycles through the options */}
        <select multiple value={selectedGenres} onChange={(e) => handleGenreSelection(e.target.value)}>
          {genreArray.map((genre) => (
            <option key={genre.id} value={genre.name}>
              {genre.name}
            </option>
          ))}
        </select>

        {/* Input Area for text search */}
        <input
          type="text"
          value={currentSearchInputString}
          onChange={(e) => handleSearchInput(e.target.value)}
        />
      </div>

      
  );
}

export default SearchSort
