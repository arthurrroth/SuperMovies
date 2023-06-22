import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'
import TrendingMoviesDisplay from '../components/TrendingMoviesDisplay'
import SearchSort from '../components/SearchSort';
import './HomePage.css'

const HomePage = () => {
  return (
    <div className='home'>
        <h1>Welcome</h1>
        <SearchSort/>
        <TrendingMoviesDisplay/>
        <NavBar />
    </div>
  )
}

export default HomePage