import React, { Component } from "react";

import './contacts.css';

class Contacts extends Component {
    render() {
        return (
            <main>
                <div className="contact-page img-background">
                    <form >
                        <h1>Constact US</h1>
                        <div className="formcontainer-contacts">
                            <div className="container-contacts">
                                <label htmlFor="fName"><strong>First Name</strong></label>
                                <input type="text" id="fName" placeholder="Enter name" name="fName" required />
                                <label htmlFor="mail"><strong>E-mail</strong></label>
                                <input type="text" id="mail" placeholder="Enter E-mail" name="mail" required />
                                <textarea name="subject" id="subject" cols="50" rows="10" placeholder="Your age, weight and your goal"></textarea>
                            </div>
                            <button type="submit"><strong>Send</strong></button>
                        </div>
                    </form>

                </div>

            </main>
        )

    }
}

export default Contacts;