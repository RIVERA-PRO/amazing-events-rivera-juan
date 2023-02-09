

const eventos = data.events
const queryString = location.search

const params = new URLSearchParams(queryString)

const _id = params.get("_id")

const descrip = eventos.find(recInfo => recInfo._id == _id)


const descripciones = document.querySelector(".descripciones")



function estimateAsistence(descrip) {
    let muestra = '';
    if (descrip.assistance) {
        muestra = descrip.assistance;
    } else if (descrip.estimate) {
        muestra = descrip.estimate;
    }
    return muestra;
}

descripciones.innerHTML = `<div class="img-des">
  <img src="${descrip.image}" alt="${descrip.name}">
  </div>
  
  <div class="text-des">
  <h5 class="name">${descrip.name}</h5>
  <h6 class="date"> ${descrip.date}</h6>
  <p class="description">${descrip.description}.</p>
  <p class="category">${descrip.category}</p>
  <p class="place">${descrip.place}</p>
  <p class="capacity">${descrip.capacity}</p>
  <p class="assistance">${estimateAsistence(descrip)}</p>
  <p class="price">$${descrip.price}</p>
  </div>
  `
