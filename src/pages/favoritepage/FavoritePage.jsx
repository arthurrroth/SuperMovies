import './FavoritePage.css'
// import '../../components/Search/CSS/Search.css'

import FloatNavBar from '../../components/NavBar/FloatNavBar'
import Favorites from '../../components/Favorites'
import React from 'react';
import SearchBar from '../../components/Search/Elements/SearchBar';
import SearchParameter from '../../components/Search/SearchParameter';



const FavoritePage = () => {

    return (
          <section className="Favorite-Page">
            <SearchBar />
            <SearchParameter />
            <article className='fav-page-title'>
              <h2>Favorites</h2>
              <p>⭐️</p>
            </article>
            <Favorites />
            <FloatNavBar />
          </section>
      );

}
 
export default FavoritePage;