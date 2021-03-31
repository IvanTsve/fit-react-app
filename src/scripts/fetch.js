

function fetchUser(user,url) {

    fetch(url, {
        "method": "POST",
        "body": JSON.stringify(user),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(r => r.json())
        .then(d => console.log(d))
}

export default fetchUser;