import UserProfile from './userProfile/userProfile';
import UserAdd from './userAdd/userAdd';

import './user.css';

function User({
    history,
}) {
    return (
        <main >
            <div className="site-main">
                <UserProfile />
                <UserAdd history={history} />
            </div>
        </main>
    )
}


export default User;