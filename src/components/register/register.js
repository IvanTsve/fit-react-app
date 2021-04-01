
import './register.css';
import firebase from '../../scripts/firebase';


function registerPage({
    history,
}) {

    function onRegisterHandler(e) {
        e.preventDefault();

        let user = {
            "username": e.target.uname.value,
            "email": e.target.mail.value,
            "password": e.target.psw.value,
            "followers": [],
            "following": [],
            "posts": [],

        }
        if (user.password !== e.target.repsw.value) {
            // TODO ERR
            return
        }

        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then((userCredential) => {
          // Signed in 
          history.push('/user/profile')
          var user = userCredential.user;
          // ...
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          // ..
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