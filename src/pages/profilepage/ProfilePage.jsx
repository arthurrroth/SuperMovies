import NavBar from "../../components/NavBar";
import "./ProfilePage.css";
import SearchSort from '../../components/SearchSort';
const ProfilePage = () => {
    return ( 
        <section>
            <SearchSort/>
            <h2>Profile</h2>
            <NavBar />
        </section>
     );
}
 
export default ProfilePage;