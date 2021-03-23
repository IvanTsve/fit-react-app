import React, { Component } from "react";
import './header.css';

class Header extends Component {
    render() {
        return (
            <header className="site-header">
                <a href="#">GymRats</a>
                <nav className="header-navigation">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Contacts</a></li>
                        <li><a href="#">Login</a></li>
                        <li><a href="#">Register</a></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header;