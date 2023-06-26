import './DownloadPage.css'

import NavBar from '../../components/NavBar';
import SearchSort from '../../components/SearchSort';
import Downloads from '../../components/Downloads';


const DownloadPage = () => {

    return (
        <section className='download-page'>
            <SearchSort />
            <article className='dl-page-title'>
              <h2>Downloads</h2>
            </article>
            <Downloads />
            <NavBar />
        </section>
      );
}
 
export default DownloadPage;