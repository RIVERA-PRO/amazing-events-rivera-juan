

const cards = document.getElementById("container")
let eventInfo = data.events
let card = ""

for (let recInfo of eventInfo){
    
    card+=` <div class="card m-2" style="width: 10rem;" id="1">
    <img src="${recInfo.image}" class="card-img-top"
        alt=" Festival of the collectivities">
    <div class="card-body">
        <h5 class="card-title">${recInfo.name}</h5>
        <p class="card-text">${recInfo.date} </p>

        <div class="d-flex justify-content-around ">
            <p class="card-price">$${recInfo.price}</p>
            <a href="./descripcion.html" class="btn text-light">More</a>
        </div>

    </div>
</div>`
}

container.innerHTML += card


