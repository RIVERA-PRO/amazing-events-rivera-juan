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




const descripciones = document.querySelector(".descripciones");

fetch('https://mindhub-xj03.onrender.com/api/amazing')
    .then(response => response.json())
    .then(data => {
        const eventos = data.events;
        const queryString = location.search;
        const params = new URLSearchParams(queryString);
        const _id = params.get("_id");
        console.log(_id)
        const descrip = eventos.find(event => event._id === _id);
        if (descrip) {
            renderDescripcion(descrip);
        } else {
            descripciones.innerHTML = "<p>Event not found</p>";
        }
    })
    .catch(error => {
        descripciones.innerHTML = "<p>Error loading data</p>";
        console.error(error);
    });

function estimateAssistance(descrip) {
    let muestra = '';
    if (descrip.assistance) {
        muestra = descrip.assistance;
    } else if (descrip.estimate) {
        muestra = descrip.estimate;
    }
    return muestra;
}

function renderDescripcion(descrip) {
    descripciones.innerHTML = `<div class="img-des">
    <img src="${descrip.image}" alt="${descrip.name}">
    </div>
    <div class="text-des">
    <h5 class="name">${descrip.name}</h5>
    <h6 class="date"> ${descrip.date}</h6>
    <p class="description"> ${descrip.description}.</p>
    <p class="category"> <span>Category:</span> ${descrip.category}</p>
    <p class="place"> <span>Place:</span> ${descrip.place}</p>
    <p class="capacity"> <span>Capacity:</span> ${descrip.capacity}</p>
    <p class="assistance"> <span>Assistance/estiamte:</span> ${estimateAssistance(descrip)}</p>
    <p class="price">$${descrip.price}</p>
    </div>`;
}





// const queryString = location.search;
// const params = new URLSearchParams(queryString);
// const id = params.get("_id");
// const descripciones = document.querySelector(".descripciones");

// async function getEventData(id) {
//     const response = await fetch(`https://mindhub-xj03.onrender.com/api/amazing/${id}`);
//     const data = await response.json();
//     return data.event;
// }

// function estimateAsistence(descrip) {
//     let muestra = '';
//     if (descrip.assistance) {
//         muestra = descrip.assistance;
//     } else if (descrip.estimate) {
//         muestra = descrip.estimate;
//     }
//     return muestra;
// }

// async function renderEventDetails() {
//     const event = await getEventData(id);

//     descripciones.innerHTML = `<div class="img-des">
//     <img src="${event.image}" alt="${event.name}">
//     </div>
//     <div class="text-des">
//     <h5 class="name">${event.name}</h5>
//     <h6 class="date"> ${event.date}</h6>
//     <p class="description"> ${event.description}.</p>
//     <p class="category"> <span>Category:</span> ${event.category}</p>
//     <p class="place"> <span>Place:</span> ${event.place}</p>
//     <p class="capacity"> <span>Capacity:</span> ${event.capacity}</p>
//     <p class="assistance"> <span>Assistance/estiamte:</span> ${estimateAsistence(event)}</p>
//     <p class="price">$${event.price}</p>
//     </div>`;
// }

// renderEventDetails();


// const queryString = window.location.search;
// const urlParams = new URLSearchParams(queryString);
// const id = urlParams.get('_id');

// async function getEventData() {
//     const response = await fetch('https://mindhub-xj03.onrender.com/api/amazing');
//     const data = await response.json();
//     return data.events;
// }

// function estimateAsistence(descrip) {
//     let muestra = '';
//     if (descrip.assistance) {
//         muestra = descrip.assistance;
//     } else if (descrip.estimate) {
//         muestra = descrip.estimate;
//     }
//     return muestra;
// }

// async function renderEventDetails() {
//     const events = await getEventData();
//     const descrip = events.find(event => event._id === id);
//     if (!descrip) {
//         // Handle case where event is not found
//         return;
//     }

//     const descripciones = document.querySelector('.descripciones');
//     descripciones.innerHTML = `
//     <div class="img-des">
//       <img src="${descrip.image}" alt="${descrip.name}">
//     </div>
//     <div class="text-des">
//       <h5 class="name">${descrip.name}</h5>
//       <h6 class="date">${descrip.date}</h6>
//       <p class="description">${descrip.description}</p>
//       <p class="category"><span>Category:</span> ${descrip.category}</p>
//       <p class="place"><span>Place:</span> ${descrip.place}</p>
//       <p class="capacity"><span>Capacity:</span> ${descrip.capacity}</p>
//       <p class="assistance"><span>Assistance/estimate:</span> ${estimateAsistence(descrip)}</p>
//       <p class="price">$${descrip.price}</p>
//     </div>
//   `;
// }

// renderEventDetails();
