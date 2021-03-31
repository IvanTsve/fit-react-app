
import './register.css';
import fetchUser from '../../scripts/fetch';
import firebase from '../../scripts/firebase';

function registerPage({
    history,
}) {

    let url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${firebase.apiKey}`;


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
        return fetchUser(user,url, "POST")
        .then(r => {
            if (!r.error) {
                history.push('/user/login');
            }
        })

        
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