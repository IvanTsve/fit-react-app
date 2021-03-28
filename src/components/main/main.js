import React, { Component } from "react";
import { Link } from 'react-router-dom';

import './main.css';


class Main extends Component {
    render() {
        return (
            <main>
                <div className="site-home">
                    <div className="site-about">
                        <h1>We are brain gains</h1>
                        <div>
                            <ul className="benefits">
                                <p className="benefits">JOIN US AND GET</p>
                                <li>workout plan based on your goals</li>
                                <li>nutrition plan based on your goals</li>
                                <li>weekly live sessions</li>
                                <Link className="site-cta" to="/user/register">JOIN</Link>
                            </ul>
                        </div>
                    </div>
                </div>

            </main>
        )
    }
}

export default Main;