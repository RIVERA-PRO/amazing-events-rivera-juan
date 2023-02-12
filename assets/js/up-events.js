const container = document.getElementById("container");
const eventInfo = data.events;
const currentDate = data.currentDate;

const filterEvents = eventInfo.filter(event => event.date > currentDate);

function createCardUp(filterEvents, container) {
  const cards = filterEvents.map(recInfo => {
    return `
      <div class="card m-2" style="width: 13rem;" data-type="${recInfo.category}">
        <img src="${recInfo.image}" class="card-img-top" alt="Festival of the collectivities" style="height: 7rem;">
        <div class="card-body">
          <h5 class="card-title">${recInfo.name}</h5>
          <p class="card-text">${recInfo.date}</p>
          <div class="d-flex justify-content-around">
            <p class="card-price">$${recInfo.price}</p>
            <a href="./descripcion.html?_id=${recInfo._id}" class="btn text-light">More</a>
          </div>
        </div>
      </div>
    `;
  }).join("");

  container.innerHTML = cards;
}
createCardUp(filterEvents, container);




//check
const categories = [...new Set(eventInfo.map(event => event.category))];
const filtersContainer = document.querySelector(".categorys");

function createChecksUp(categories, filtersContainer) {
  categories.forEach(category => {
    const filter = `
        <input type="checkbox" id="${category}" value="${category}" />
        <label for="${category}">${category}</label>`

    filtersContainer.innerHTML += filter
  });
}
createChecksUp(categories, filtersContainer)


function filterCards(selectedCategories, cards) {
  if (selectedCategories.length === 0) {
    cards.forEach(card => {
      card.style.display = "block";
    });
    return;
  }

  cards.forEach(card => {
    if (selectedCategories.includes(card.getAttribute("data-type"))) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}


filtersContainer.addEventListener("change", () => {
  const selectedCategories = Array.from(filtersContainer.querySelectorAll("input:checked")).map(checkbox => checkbox.value);
  const cards = container.querySelectorAll(".card");

  filterCards(selectedCategories, cards);
});


//search
const searchInput = document.querySelector(".form-control");

function inputSearchUp() {
  searchInput.addEventListener("keyup", e => {
    const search = e.target.value.toLowerCase();
    const selectedCategories = Array.from(filtersContainer.querySelectorAll("input:checked")).map(checkbox => checkbox.value);
    const cards = document.querySelectorAll(".card");
    let hay = false;

    cards.forEach(card => {
      const name = card.querySelector(".card-title").innerText.toLowerCase();
      if (name.startsWith(search) && (selectedCategories.length === 0 || selectedCategories.includes(card.getAttribute("data-type")))) {
        hay = true;
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });

    if (!hay) {
      container.innerHTML = `<div class="error">  <div class="p-reset"> <p class="text-center">Sorry Man.!! No events found</p> <a href="./pastEvents.html"> <img src="./assets/img/reset.png" alt="reset">  </a></div> <img src="./assets/img/error.webp" alt="error"> </div>`;
    }
  });

}
inputSearchUp()
