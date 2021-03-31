import './login.css';

import React, { useState, useEffect } from 'react';
import { Redirect } from "react-router";

import fetchUser from '../../scripts/fetch';
import firebase from '../../scripts/firebase';


function loginPage({
    history,
}) {
    let url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${firebase.apiKey}`;

    function onSubmitHandler(e) {
        e.preventDefault();
        let user = {
            "email": e.target.mail.value,
            "password": e.target.psw.value,
        }
        fetchUser(user, url, "POST")
            .then(r => {
                if (!r.error) {
                    firebase.isLogged = true;
                    localStorage.setItem('userId', r.localId);
                    history.push('/');

                }
            })
            .then(() => {
            })



    }
    return (
        <main>
            <div className="login-page img-background">
                <form onSubmit={onSubmitHandler}>
                    <h1>SIGN IN</h1>

                    <div className="formcontainer-login">
                        <div className="container-login">
                            <label htmlFor="mail"><strong>Email</strong></label>
                            <input type="text" id="mail" placeholder="Enter Email" name="mail" required />
                            <label htmlFor="psw"><strong>Password</strong></label>
                            <input type="password" id="psw" placeholder="Enter Password" name="psw" required />
                        </div>
                        <button type="submit"><strong>SIGN IN</strong></button>
                    </div>

                </form>
            </div>
        </main>
    )
}

export default loginPage;