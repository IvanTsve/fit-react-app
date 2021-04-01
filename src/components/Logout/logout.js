import firebaseConfig from '../../scripts/firebase';
import Main from '../main/main';

let url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithIdp?key=${firebaseConfig.apiKey}`;

function logout({
    history,
}) {
    let uid = localStorage.getItem('userData');
    if (uid) {

        uid = JSON.parse(uid).idToken;
    }
    localStorage.removeItem('userData');
    history.push('/');
    return <Main />
}

export default logout