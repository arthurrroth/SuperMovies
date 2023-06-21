import React, { useContext, useEffect } from 'react'
import { MovieDataContext } from '../Context'

const SearchResultPage = () => {
    const { movieData, setMovieData } = useContext(MovieDataContext);

    useEffect(() => {
        console.log({movieData});
    }, [])
  return (
    <div>SearchResultPage</div>
  )
}

export default SearchResultPage