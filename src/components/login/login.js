
import './login.css';
import firebase from '../../scripts/firebase';

let url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${firebase.apiKey}`;

function loginPage(params) {

    function onSubmitHandler(e) {
       e.preventDefault();
        let user = {
            "email": e.target.mail.value,
            "password": e.target.psw.value,
        }

        fetch(url, {
            "method": "POST",
            "body": JSON.stringify(user),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(r => r.json())
            .then(d => console.log(d))

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
                        <button type="submit"><strong>SIGN UP</strong></button>
                    </div>

                </form>
            </div>
        </main>
    )
}

export default loginPage;