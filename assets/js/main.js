
const container = document.getElementById("container");
const eventInfo = data.events;

const cards = eventInfo.map(recInfo => {
  return `
    <div class="card m-2" style="width: 13rem;"  data-type="${recInfo.category}">
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


function filterSearch(search, e) {
  let arrayFiltro = e.filter(searchFiltering => searchFiltering.name.toLowerCase().includes(search))
  return arrayFiltro
}

function inputSearch(searchInput) {

  searchInput.addEventListener("input", e => {
    const search = e.target.value.toLowerCase();
    const cards = document.querySelectorAll(".card");
    const selectedCategories = Array.from(filtersContainer.querySelectorAll("input:checked")).map(checkbox => checkbox.value);

    let hay = false;

    cards.forEach(card => {
      const name = card.querySelector(".card-title").innerText.toLowerCase();
      const category = card.getAttribute("data-type");

      if (
        (name.startsWith(search) || search === '') &&
        (selectedCategories.includes(category) || selectedCategories.length === 0)
      ) {
        hay = true;
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });

    if (!hay) {
      container.innerHTML = `<div class="error"> <div class="p-reset"><p class="text-center">Sorry Man.!! No events found</p> <a href="./index.html"><img src="./assets/img/reset.png" id="reset"> </a></div>
        <img src="./assets/img/error.webp" alt="error"> </div>`;
    }
  });


}

inputSearch(searchInput)




//check
const categories = [...new Set(data.events.map(event => event.category))];
const filtersContainer = document.querySelector(".categorys")


function createCheck() {
  categories.forEach(category => {
    const filter = `
        <input type="checkbox" id="${category}" value="${category}" />
        <label for="${category}">${category}</label>`

    filtersContainer.innerHTML += filter
  });
}
createCheck()


function inputCheck(filtersContainer) {
  filtersContainer.addEventListener("change", () => {
    const selectedCategories = Array.from(filtersContainer.querySelectorAll("input:checked")).map(checkbox => checkbox.value)

    const cards = document.querySelectorAll(".card")
    let hay = false

    cards.forEach(card => {
      if (selectedCategories.includes(card.getAttribute("data-type"))) {
        hay = true
        card.style.display = "block"
      } else {
        card.style.display = "none"
      }
    })

    if (!hay) {
      container.innerHTML = `<div class="error"> <div class="p-reset"><p class="text-center">Sorry Man.!! No events found</p> <a href="./index.html"><img src="./assets/img/reset.png" alt="reset"> </a></div>
      <img src="./assets/img/error.webp" alt="error"> </div>`
    }
  })
}
inputCheck(filtersContainer)




