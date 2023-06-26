import React, { useContext } from 'react'


const LoadingPage = () => {
  const {favoritedMovies, setFavMovies} = useContext(MovieDataContext)

  return (
<<<<<<< HEAD
    <div>
      {favoritedMovies}
    </div>
=======
    <div className='mov'><p>.MOV</p></div>
>>>>>>> c9d8626330e9de9b94131a68145302a35035805d
  )
}

export default LoadingPage