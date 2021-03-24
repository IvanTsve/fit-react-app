import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './header.css';

class Header extends Component {
    render() {
        return (
            
            <header className="site-header">
                <Link to="/">GymRats</Link>
                <nav className="header-navigation">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/user/profile">Profile</Link></li>
                        <li><Link to="/contact-us">Contacts</Link></li>
                        <li><Link to="/user/login">Login</Link></li>
                        <li><Link to="/user/register">Register</Link></li>
                        <li><Link to="/user">Logout</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header;