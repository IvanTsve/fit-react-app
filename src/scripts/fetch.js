import firebase from '../scripts/firebase';


function fetchUser(user, url) {

    return fetch(url, {
        "method": "POST",
        "body": JSON.stringify(user),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(r => r.json())
        
}

export default fetchUser;