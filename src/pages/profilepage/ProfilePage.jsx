import NavBar from "../../components/NavBar/FloatNavBar";
import "./ProfilePage.css";
import SearchBar from "../../components/Search/Elements/SearchBar";
import SearchParameter from "../../components/Search/SearchParameter";
const ProfilePage = () => {
    return ( 
        <section>
            <SearchBar/>
            <SearchParameter/>
            <h2>Profile</h2>
            <NavBar />
        </section>
     );
}
 
export default ProfilePage;