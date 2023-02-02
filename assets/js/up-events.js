const container = document.getElementById("container");
const eventInfo = data.events;
const currentDate = data.currentDate;

const filterEvents = eventInfo.filter(event => event.date > currentDate);

const cards = filterEvents.map(recInfo => {
  return `
    <div class="card m-2" style="width: 10rem;">
      <img src="${recInfo.image}" class="card-img-top" alt="Festival of the collectivities">
      <div class="card-body">
        <h5 class="card-title">${recInfo.name}</h5>
        <p class="card-text">${recInfo.date}</p>
        <div class="d-flex justify-content-around">
          <p class="card-price">$${recInfo.price}</p>
          <a href="./descripcion.html" class="btn text-light">More</a>
        </div>
      </div>
    </div>
  `;
}).join("");

container.innerHTML += cards;
