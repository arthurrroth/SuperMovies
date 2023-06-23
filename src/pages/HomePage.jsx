import SearchSort from '../components/SearchSort';
import './HomePage.css'
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className='home'>
        <h1>Welcome</h1>
        <SearchSort/>
        <Link to='/movie/:id'>Test Movie Details</Link>
    </div>
  )
}

export default HomePage