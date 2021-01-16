var myHeaders = new Headers();
myHeaders.append("Accept", "application/json");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

export function getFact() {
    return fetch("https://catfact.ninja/fact?max_length=140", requestOptions)
    .then(response => response.json())
    .catch(error => console.log('error', error));
  
}

