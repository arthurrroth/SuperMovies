import React, { useContext, useEffect } from 'react'
import { MovieDataContext } from '../Context'
import NavBar from '../components/NavBar'

const SearchResultPage = () => {
    const { movieData, setMovieData } = useContext(MovieDataContext);

    useEffect(() => {
        console.log({movieData});
    }, [])
  return (
    <div>SearchResultPage<NavBar /></div>
  )
}

export default SearchResultPage