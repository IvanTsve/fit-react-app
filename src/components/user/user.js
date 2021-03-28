import UserPost from './userPosts/userPosts';
import UserProfile from './userProfile/userProfile';

import './user.css';

function User(params) {
    return (
        <main >
            <div className="site-main">
                <UserProfile />
                <UserPost />
            </div>


        </main>
    )
}


export default User;