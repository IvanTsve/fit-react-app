import React, { Component } from "react";
import './footer.css';

class Footer extends Component {
    render(props) {
        return(

        <div>
            <ul className="site-footer">
                <li>INSTAGRAM</li>
                <li>FACEBOOK</li>
                <li>EMAIL</li>
                <li>PHONE</li>
            </ul>
        </div>
        )

    }
}

export default Footer;