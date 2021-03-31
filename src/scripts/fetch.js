import firebase from '../scripts/firebase';


function fetchUser(data, url, mathod) {

    return fetch(url, {
        "method": mathod,
        "body": JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(r => r.json())
        
}

export default fetchUser;