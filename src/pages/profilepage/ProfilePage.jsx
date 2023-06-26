import SearchBar from "../../components/Search/Elements/SearchBar";
import SearchParameter from "../../components/Search/SearchParameter";

import "./ProfilePage.css";
import FloatNavBar from "../../components/NavBar/FloatNavBar";


const ProfilePage = () => {
    return ( 
        <section>
            <article className="profile-container">
                <h2>Hello User!</h2>
            </article>
            <SearchBar/>
            <SearchParameter/>
            <article className="favo-container">
            </article>

            <article className="downl-container">

            </article>
            <FloatNavBar />
        </section>
     );
}
 
export default ProfilePage;