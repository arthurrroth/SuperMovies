import NavBar from '../../components/NavBar/FloatNavBar'
import SearchBar from '../../components/Search/Elements/SearchBar';
import SearchParameter from '../../components/Search/SearchParameter';


const DownloadPage = () => {
    
    return ( 
        <section>
            <SearchBar/>
            <SearchParameter/>
            <h2>Downloads</h2>
            <NavBar />            
        </section>

     );
}
 
export default DownloadPage;