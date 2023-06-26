import React, { useContext } from 'react'


const LoadingPage = () => {
  const {favoritedMovies, setFavMovies} = useContext(MovieDataContext)

  return (
    <div>
      {favoritedMovies}
    </div>
  )
}

export default LoadingPage