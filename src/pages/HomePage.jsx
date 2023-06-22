import { Link } from 'react-router-dom';
import SearchSort from '../components/SearchSort';
import './HomePage.css'

const HomePage = () => {
  return (
    <div className='home'>
        <h1>Welcome</h1>
        <SearchSort/>
        <Link to={"/movie/:id"}>Detail Page Test</Link>
    </div>
  )
}

export default HomePage