
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
            "userPicture": e.target.pictureUrl.value,
            "email": e.target.mail.value,
            "instagram": e.target.ig.value,
            "facebook": e.target.fb.value,
            "linkedin": e.target.in.value,
        }
        if (e.target.psw.value !== e.target.repsw.value) {
            // TODO ERR
            return
        }
        const firebaseAuth = firebase.auth().createUserWithEmailAndPassword(user.email, e.target.psw.value)
        Promise.allSettled([firebaseAuth])
            .then((r) => {
                if (r[0].status === "fulfilled") {
                    fetchData("POST", userUrl, user)
                        .then(r => {
                            localStorage.setItem("em", user.email)
                            history.push('/user/profile')
                        })
                }

            })
            .catch((error) => {
                var errorCode = error.code;
                console.log(`${errorCode}`)
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
                            <label htmlFor="pictureUrl"><strong>Picture Url</strong></label>
                            <input type="text" id="pictureUrl" placeholder="Enter Photo url" name="pictureUrl" required />
                            <label htmlFor="mail"><strong>E-mail</strong></label>
                            <input type="text" id="mail" placeholder="Enter E-mail" name="mail" required />
                            <label htmlFor="psw"><strong>Password</strong></label>
                            <input type="password" id="psw" placeholder="Enter Password" name="psw" required />
                            <label htmlFor="repsw"><strong>Re-Password</strong></label>
                            <input type="password" id="repsw" placeholder="Enter Re-Password" name="repsw" required />
                            <label htmlFor="ig"><strong>Instagram</strong></label>
                            <input type="text" id="ig" placeholder="Enter Instagram account" name="ig" />
                            <label htmlFor="fb"><strong>FaceBook</strong></label>
                            <input type="text" id="fb" placeholder="Enter FaceBook www.facebook.com/{Steve}/" name="fb" />
                            <label htmlFor="in"><strong>LinkedIn</strong></label>
                            <input type="text" id="in" placeholder="Enter LinkedIn account" name="in" />
                        </div>
                        <button type="submit"><strong>SIGN UP</strong></button>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default registerPage;