
const cardEl = document.getElementById('card')
// const dataUrlEndpoint = 'https://lanciweb.github.io/demo/api/pictures/'; 

fetch('https://lanciweb.github.io/demo/api/pictures/')
.then(res => res.json())
.then(data => {
    console.log(data);

    
})
.catch(error => console.error(error));