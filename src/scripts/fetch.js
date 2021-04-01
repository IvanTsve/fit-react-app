import firebase from '../scripts/firebase';


function fetchUser(data, url, method) {

    let options = {
        method,
    }
    if(data) {
        Object.assign(options, {
            headers: { 
                'Content-Type': 'application/json' 
            },
            "body": JSON.stringify(data),
        })
    }
    return fetch(url, options)
        .then(r => r.json())

}

export default fetchUser;