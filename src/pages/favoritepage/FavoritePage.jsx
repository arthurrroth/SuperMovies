import NavBar from '../../components/NavBar/FloatNavBar'
import SearchBar from '../../components/Search/Elements/SearchBar';
import SearchParameter from '../../components/Search/SearchParameter';


const FavoritePage = () => {
    return ( 
        <section>
            <SearchBar/>
            <SearchParameter/>
            <h2>Favorites</h2>
            <NavBar /> 
        </section>
     );
}
 
export default FavoritePage;