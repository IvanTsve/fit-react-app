
import './register.css';
import firebase from '../../scripts/firebase';

import fetchData from '../../scripts/fetchData';

function registerPage({
    history,
}) {

    function onRegisterHandler(e) {
        e.preventDefault();
        let userUrl = `https://fit-react-app-default-rtdb.firebaseio.com/users.json`;
        let user = {
            "displayName": e.target.uname.value,
            "email": e.target.mail.value,
            "password": e.target.psw.value,
            "userPicture": `https://images.unsplash.com/photo-1575939238474-c8ada13b2724?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80`,

        }
        if (user.password !== e.target.repsw.value) {
            // TODO ERR
            return
        }
        const firebaseAuth = firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
           
        Promise.allSettled([firebaseAuth])
            .then((r) => {
                if (r[0].status === "fulfilled") {
                    fetchData("POST", userUrl, user)
                }
                history.push('/user/profile')

            })
            .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(`${errorMessage}`)
    
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