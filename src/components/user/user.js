import UserPost from './userPosts/userPosts';
import UserProfile from './userProfile/userProfile';

import './user.css';

function User(params) {
    return (
        <main className="site-main">
            <UserProfile />
            <UserPost />

        </main>
    )
}


export default User;