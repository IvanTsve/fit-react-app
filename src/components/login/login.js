
import './login.css';


function loginPage(params) {

    function onSubmitHandler(e) {
        e.preventDefault();
        console.log(e.target.uname.value);
    }
    return (
        <main>
            <div className="login-page img-background">
                <form onSubmit={onSubmitHandler}>
                    <h1>SIGN IN</h1>
                    
                    <div className="formcontainer-login">
                        <div className="container-login">
                            <label htmlFor="uname"><strong>Username</strong></label>
                            <input type="text" id="uname" placeholder="Enter Username" name="uname" required />
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