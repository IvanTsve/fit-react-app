import UserProfile from './userProfile/userProfile';
import UserAdd from './userAdd/userAdd';
import UserPosts from './userPosts/userPosts';

import UserContext from '../../context/userContext';

import './user.css';

function User({
    history,
    user,
}) {
    return (
        
        <main >
            <div className="site-main">
                    <UserProfile />
                <UserAdd  history={history}/>
            </div>
        </main>
    )
}


export default User;