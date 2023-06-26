import './FavoritePage.css'

import NavBar from '../../components/NavBar'
import SearchSort from '../../components/SearchSort';
import Favorites from '../../components/Favorites'

import Star from '../../assets/img/Star.png'


const FavoritePage = () => {

    return (
          <section className="Favorite-Page">
            <SearchSort />
            <article className='fav-page-title'>
              <h2>Favorites</h2>
              <img src={Star} alt="" />
            </article>
            <Favorites />
            <NavBar />
          </section>
      );
}
 
export default FavoritePage;