function fetchData(method, url, data) {

    return fetch(url, {
        "method": method,
        headers: {
            'Content-Type': 'application/json'
          },
        "body": JSON.stringify(data),

    })

}
export default fetchData;