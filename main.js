
const cardEl = document.getElementById('card')
// const dataUrlEndpoint = 'https://lanciweb.github.io/demo/api/pictures/'; 

fetch('https://lanciweb.github.io/demo/api/pictures/')
.then(res => res.json())
.then(data => {
    console.log(data);

    const dataList = data;    


dataList.forEach(data => {


cardEl.insertAdjacentHTML('beforeend', generateMarkup(data))
})

})

function generateMarkup(data){
    return `<div class="col mb-3 d-flex justify-content-center">
                        <div class="card-frame p-3">
                            <div class="pin">
                                <img id ='img' src="./assets/img/pin.svg" alt="" style="width: 30px;">
                            </div>
                            <div class="card-img mb-3">
                                <img src="${data.url}" alt="">
                            </div>

                            <div class="card-details">
                                <div class="date">${data.date}</div>
                                <div class="card-title fs-5 title">${data.title}</div>
                            </div>
                        </div>
                    </div>`
}