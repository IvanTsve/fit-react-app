import { Link } from 'react-router-dom';
import './header.css';
function Header({
    user
}) {
    return (
        <header className="site-header">
            <Link to="/">Brain Gains</Link>
            <nav className="header-navigation">
                <ul>
                    {user ? <li><Link to="/user/profile">Profile</Link></li> : null}
                    <li><Link to="/contact-us">Contacts</Link></li>
                    {user ? <li><Link to="/user/logout">Logout</Link></li> : null}
                    {!user ?  <li><Link to="/user/login">Login</Link></li>: null}
                    {!user ?  <li><Link to="/user/register">Register</Link></li>: null}

                </ul>

            </nav>
        </header>
    )
}

export default Header;