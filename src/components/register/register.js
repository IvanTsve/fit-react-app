import { Link } from 'react-router-dom';
import './register.css';

function registerPage(params) {
    return (
        <main>

            <div className="register-page img-background">
                <form>
                    <h1>SIGN UP</h1>
                    <div className="icon">
                        <i className="fas fa-user-circle"/>
                    </div>
                    <div className="formcontainer">
                        <div className="container">
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