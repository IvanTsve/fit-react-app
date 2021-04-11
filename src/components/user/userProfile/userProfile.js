import './userProfile.css';
import { useEffect, useState } from 'react';
import fetchData from '../../../scripts/fetchData';

function UserProfile() {
    const [user, setUser] = useState({});

    let url = `https://fit-react-app-default-rtdb.firebaseio.com/users.json`;

    useEffect(() => {
        fetchData("GET", url)
            .then(r => r.json())
            .then(r => {
                let mail = localStorage.getItem("em");
                let k = Object.values(r).find(x => x.email.toLowerCase() == mail);
                setUser(k);
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
            });
    }, [])
    return (
        <section className="user-info">
            <div className="profile-picture">
                <img src={user.userPicture} alt="" />
            </div>
            <div className="profile-content">
                <div className="user-name">

                    <p>{user.displayName}</p>
                    <p>{user.email}</p>
                </div>
                <div className="user-activity">
                </div>
                <div className="socials">
                    <ul>
                        <li><a className="social-icon fa fa-facebook-official" href={`https://www.instagram.com/${user.instagram}/`} target="_blank" ></a></li>
                        <li><a className="social-icon fab fa-instagram" href={`https://www.facebook.com/${user.facebook}/`} target="_blank" ></a></li>
                        <li><a className="social-icon fab fa-linkedin" href={`https://www.linkedin.com/in/${user.linkedin}/`} target="_blank" ></a></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default UserProfile;