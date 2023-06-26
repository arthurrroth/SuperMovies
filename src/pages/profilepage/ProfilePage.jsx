import NavBar from "../../components/NavBar";
import "./ProfilePage.css";
import SearchSort from '../../components/SearchSort';


const ProfilePage = () => {
    return ( 
        <section>
            <article className="profile-container">
                <h2>Hello User!</h2>
            </article>
            <SearchSort/>
            <article className="favo-container">
            </article>

            <article className="downl-container">

            </article>
            <NavBar />
        </section>
     );
}
 
export default ProfilePage;