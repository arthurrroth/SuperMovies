import './FavoritePage.css'

import FloatNavBar from '../../components/NavBar/FloatNavBar'
import Favorites from '../../components/Favorites'
import SearchBar from '../../components/Search/Elements/SearchBar';
import SearchParameter from '../../components/Search/SearchParameter';

import Star from '../../assets/img/Star.png'


const FavoritePage = () => {

    return (
          <section className="Favorite-Page">
            <SearchBar />
            <SearchParameter />
            <article className='fav-page-title'>
              <h2>Favorites</h2>
              <img src={Star} alt="" />
            </article>
            <Favorites />
            <FloatNavBar />
          </section>
      );

}
 
export default FavoritePage;