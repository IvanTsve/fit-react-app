import UserPost from './userPosts/userPosts';
import UserProfile from './userProfile/userProfile';


function User(params) {
    return (
        <main className="site-main">
            <h1>User Profile</h1>

            <UserProfile />
            <UserPost />

        </main>
    )
}


export default User;