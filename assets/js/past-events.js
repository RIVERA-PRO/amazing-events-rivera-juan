const container = document.getElementById("container");
const eventInfo = data.events;
const currentDate = data.currentDate;

const filterEvents = eventInfo.filter(event => event.date < currentDate);


const cards = filterEvents.map(recInfo => {
  return `
    <div class="card m-2" style="width: 13rem;">
      <img src="${recInfo.image}" class="card-img-top" alt="Festival of the collectivities" style="height: 7rem;">
      <div class="card-body">
        <h5 class="card-title">${recInfo.name}</h5>
        <p class="card-text">${recInfo.date}</p>
        <div class="d-flex justify-content-around">
          <p class="card-price">$${recInfo.price}</p>
          <a  href="./descripcion.html?_id=${recInfo._id}" class="btn text-light">More</a>
        </div>
      </div>
    </div>
  `;
}).join("");

container.innerHTML += cards;


//search
const searchInput = document.querySelector(".form-control");

function inputSearchPast() {

  searchInput.addEventListener("input", e => {
    const search = e.target.value.toLowerCase();
    const cards = document.querySelectorAll(".card");

    let hay = false;

    cards.forEach(card => {
      const name = card.querySelector(".card-title").innerText.toLowerCase();
      if (name.startsWith(search)) {
        hay = true;
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });

    if (!hay) {
      container.innerHTML = `<div class="error"> <div class="p-reset"><p class="text-center">Sorry Man.!! No events found</p> <a href="./pastEvents.html"><img src="./assets/img/reset.png" alt="reset"> </a></div> 
      <img src="./assets/img/error.webp" alt="error"> </div>`;
    }
  });

}
inputSearchPast()


//check
const categories = [...new Set(eventInfo.map(event => event.category))];
const filtersContainer = document.querySelector(".categorys");

function createChec() {
  categories.forEach(category => {
    const filter = `
      <input type="checkbox" id="${category}" value="${category}">
      <label for="${category}">${category}</label>`;

    filtersContainer.innerHTML += filter;
  });
}
createChec()


function filterCheck() {

  filtersContainer.addEventListener("change", e => {
    const selectedCategories = Array.from(filtersContainer.querySelectorAll("input:checked"))
      .map(checkbox => checkbox.value);

    let hay = false;
    const filterEvents = eventInfo.filter(event => {
      if (selectedCategories.includes(event.category) && event.date < currentDate) {
        hay = true;
        return true;
      }
      return false;
    });

    const cards = filterEvents.map(recInfo => {
      return `
        <div class="card m-2" style="width: 13rem;">
          <img src="${recInfo.image}" class="card-img-top" alt="Festival of the collectivities" style="height: 7rem;">
          <div class="card-body">
            <h5 class="card-title">${recInfo.name}</h5>
            <p class="card-text">${recInfo.date}</p>
            <div class="d-flex justify-content-around">
              <p class="card-price">$${recInfo.price}</p>
              <a  href="./descripcion.html?_id=${recInfo._id}" class="btn text-light">More</a>
            </div>
          </div>
        </div>
      `;
    }).join("");

    container.innerHTML = cards;

    if (!hay) {
      container.innerHTML = `<div class="error"> <div class="p-reset"><p class="text-center">Sorry Man.!! No events found</p> <a href="./pastEvents.html"><img src="./assets/img/reset.png" alt="reset"> </a></div>
      <img src="./assets/img/error.webp" alt="error"> </div>`;
    }
  });
}
filterCheck()