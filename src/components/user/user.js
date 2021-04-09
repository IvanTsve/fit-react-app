import UserProfile from './userProfile/userProfile';
import UserAdd from './userAdd/userAdd';

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