
import './register.css';
import firebase from '../../scripts/firebase';

import fetchData from '../../scripts/fetchData';

function registerPage({
    history,
}) {

    function onRegisterHandler(e) {
        e.preventDefault();

        let user = {
            "displayName": e.target.uname.value,
            "email": e.target.mail.value,
            "password": e.target.psw.value,

        }
        if (user.password !== e.target.repsw.value) {
            // TODO ERR
            return
        }
        const promise1 = firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        // .then((userCredential) => {
        //     console.log(userCredential);
        //     history.push('/user/profile')
        //     // Signed in 
        //     var user = userCredential.user;
        //     // ...
        // })
        // .catch((error) => {
        //     var errorCode = error.code;
        //     var errorMessage = error.message;
        //     // ..
        // });

        // .then(r => r.json())
        // .then(r => console.log(r))

        Promise.all([promise1])
            .then((values) => {
                fetchData(`https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBJ6oNOhZlXlgHUkg3gXWjPrh6dtCI8qVA`, "POST", {
                    "email": e.target.mail.value,
                    "idToken": values.uid,
                    "photoUrl": "https://thispersondoesnotexist.com/image",
                })
            });
    }

    return (
        <main>
            <div className="register-page img-background">
                <form onSubmit={onRegisterHandler}>
                    <h1>SIGN UP</h1>
                    <div className="formcontainer-register">
                        <div className="container-register">
                            <label htmlFor="uname"><strong>Username</strong></label>
                            <input type="text" id="uname" placeholder="Enter Username" name="uname" required />
                            <label htmlFor="mail"><strong>E-mail</strong></label>
                            <input type="text" id="mail" placeholder="Enter E-mail" name="mail" required />
                            <label htmlFor="psw"><strong>Password</strong></label>
                            <input type="password" id="psw" placeholder="Enter Password" name="psw" required />
                            <label htmlFor="repsw"><strong>Re-Password</strong></label>
                            <input type="password" id="repsw" placeholder="Enter Re-Password" name="repsw" required />
                        </div>
                        <button type="submit"><strong>SIGN UP</strong></button>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default registerPage;