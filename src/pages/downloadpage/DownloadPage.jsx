import './DownloadPage.css'

import FloatNavBar from '../../components/NavBar/FloatNavBar'
import SearchBar from '../../components/Search/Elements/SearchBar';
import SearchParameter from '../../components/Search/SearchParameter';

import Downloads from '../../components/Downloads'


const DownloadPage = () => {
    
    return (
        <section className='download-page'>
            <SearchBar />
            <SearchParameter/>
            <article className='dl-page-title'>
              <h2>Downloads</h2>
            </article>
            <Downloads />
            <FloatNavBar />
        </section>
      );
}
 
export default DownloadPage;