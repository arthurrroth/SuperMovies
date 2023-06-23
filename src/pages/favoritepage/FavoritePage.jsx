import NavBar from '../../components/NavBar'
import SearchSort from '../../components/SearchSort';

const FavoritePage = () => {
    return ( 
        <section>
            <SearchSort/>
            <h2>Favorites</h2>
            <NavBar /> 
        </section>
     );
}
 
export default FavoritePage;