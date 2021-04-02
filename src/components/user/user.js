import UserPost from './userPosts/userPosts';
import UserProfile from './userProfile/userProfile';
import UserAdd from './userAdd/userAdd';

import './user.css';

function User({
    user,
}) {
    return (
        <main >
            <div className="site-main">
                <UserProfile />
                <UserAdd />
                <UserPost />

            </div>


        </main>
    )
}


export default User;