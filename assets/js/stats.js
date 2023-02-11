

fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // aquí puedes procesar los datos recibidos de la API
    })
    .catch(error => {
        console.error('Ha habido un error al recuperar los datos:', error);
    });
