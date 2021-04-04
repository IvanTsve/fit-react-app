import './login.css';

import firebase from '../../scripts/firebase';
import fetchData from '../../scripts/fetchData';

function loginPage({
    history,
}) {
    function onSubmitHandler(e) {
        e.preventDefault();

        let url = `https://fit-react-app-default-rtdb.firebaseio.com/users.json`;

        const firebaseAuth = firebase.auth().signInWithEmailAndPassword(e.target.mail.value, e.target.psw.value)

        Promise.resolve(firebaseAuth)
            .then((res) => {
             //   const userMail = res.user.email;
            //     fetchData("GET", url)
            //     .then(r => r.json())
            //     .then(r => {
            //         let arr = Object.entries(r);
            //        arr.map()
            //   //      console.log(arr.map(x => x.email === userMail));                    
         //       })
                history.push('/user/profile')
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
            });

        // const userFetch = fetchData("GET")
        // .then(r=>r.json())
        // .then(d => console.log(d))

        //Promise.all([userFetch,userAuth])

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