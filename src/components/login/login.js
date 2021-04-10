import './login.css';

import firebase from '../../scripts/firebase';
import fetchData from '../../scripts/fetchData';

import React, { useState } from 'react';


function LoginPage({
    history,
}) {
    const [userMail, setUserMail] = useState('');
    const [users, setUsers] = useState([]);
    let user = users.find(x => x => x.email === userMail);

    function onSubmitHandler(e) {
        e.preventDefault();
        let url = `https://fit-react-app-default-rtdb.firebaseio.com/users.json`;
        firebase.auth().signInWithEmailAndPassword(e.target.mail.value, e.target.psw.value)
            .then(r => {
                let a = r.user.email
                setUserMail(r.user.email);
                history.push('/user/profile')
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
            });
        fetchData("GET", url)
            .then(r => r.json())
            .then(r => {
                setUsers(Object.entries(r))
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
            });
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

export default LoginPage;