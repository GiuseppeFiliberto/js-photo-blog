
const cardEl = document.getElementById('card')
const overlayEl = document.querySelector('.overlay')
const overlayImg = document.getElementById('overlay-img')
const imgOverlayContainer = document.querySelector('img-container')
const img = document.querySelectorAll('img')
const btnEl = document.querySelector('.btn')

// const dataUrlEndpoint = 'https://lanciweb.github.io/demo/api/pictures/'; 

fetch('https://lanciweb.github.io/demo/api/pictures/')
.then(res => res.json())
.then(data => {
    console.log(data);

    const dataList = data;    


dataList.forEach(data => {


cardEl.insertAdjacentHTML('beforeend', generateMarkup(data))
})

// Aggiungo l'evento che al click espanda l'immagine sulla pagina


cardEl.addEventListener('click', (event) => {

    const clickedImg = event.target.closest('.card-frame img');

    if (clickedImg) {
        overlayImg.src = clickedImg.src;
        overlayEl.style.display = 'flex';
    }


});


})

function generateMarkup(data){
    return `<div class="col">
                <div class='mb-3 d-flex justify-content-center'> 
                            <div class="card-frame p-3">
                                <div class="pin">
                                    <img id ='img' src="./assets/img/pin.svg" alt="" style="width: 30px;">
                                </div>
                                <div class="card-img mb-3">
                                    <img src="${data.url}" alt="">
                                </div>

                                <div class="card-details">
                                    <div class="date text-secondary">${data.date}</div>
                                    <div class="card-title fs-4 title">${data.title.toUpperCase()}</div>
                                </div>
                            </div>
                </div>
             </div>`
    
}


btnEl.addEventListener('click', () => {
    overlayEl.style.display = 'none';
});
