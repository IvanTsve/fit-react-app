import './login.css';


import firebase from '../../scripts/firebase';


function loginPage({
    history,
}) {

    function onSubmitHandler(e) {
        e.preventDefault();
   
        firebase.auth().signInWithEmailAndPassword(e.target.mail.value, e.target.psw.value)
            .then((userCredential) => {
               console.log(userCredential);
                // Signed in
                
                history.push('/user/profile')
                // ...
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

export default loginPage;