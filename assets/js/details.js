// const eventos = data.events
// const queryString = location.search
// const params = new URLSearchParams(queryString)
// const id = params.get("_id")
// const descrip = eventos.find(recInfo => recInfo._id == id)
// const descripciones = document.querySelector(".descripciones")


// function estimateAsistence(descrip) {
//     let muestra = ''
//     if (descrip.assistance) {
//         muestra = descrip.assistance
//     } else if (descrip.estimate) {
//         muestra = descrip.estimate
//     }
//     return muestra
// }


// descripciones.innerHTML = `<div class="img-des">
//   <img src="${descrip.image}" alt="${descrip.name}">
//   </div>
//   <div class="text-des">
//   <h5 class="name">${descrip.name}</h5>
//   <h6 class="date"> ${descrip.date}</h6>
//   <p class="description"> ${descrip.description}.</p>
//   <p class="category"> <span>Category:</span> ${descrip.category}</p>
//   <p class="place"> <span>Place:</span> ${descrip.place}</p>
//   <p class="capacity"> <span>Capacity:</span> ${descrip.capacity}</p>
//   <p class="assistance"> <span>Assistance/estiamte:</span> ${estimateAsistence(descrip)}</p>
//   <p class="price">$${descrip.price}</p>
//   </div>`





import { addDetailsCard } from "./module/funciones.js"
const $container = document.querySelector(".descripciones");
const params = new URLSearchParams(location.search);
const id = params.get("id");
fetch("https://mindhub-xj03.onrender.com/api/amazing")
    .then(res => res.json())
    .then(data => {
        addDetailsCard(data.events.find((card) => card._id == id), $container)
    })





