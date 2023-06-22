import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'
import TrendingMoviesDisplay from '../components/TrendingMoviesDisplay'

const HomePage = () => {
  return (
    <div>
        <Link to={"/search"}>HomePage</Link>
        <TrendingMoviesDisplay/>
        <NavBar />
    </div>
  )
}

export default HomePage