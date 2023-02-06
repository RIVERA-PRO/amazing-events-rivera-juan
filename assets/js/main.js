
const container = document.getElementById("container");

const eventInfo = data.events;

const cards = eventInfo.map(recInfo => {
  return `
    <div class="card m-2" style="width: 13rem;" id="${recInfo.name}" data-type="${recInfo.category}">
      <img src="${recInfo.image}" class="card-img-top" alt="Festival of the collectivities" style="height: 7rem;">
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




//search
const searchInput = document.querySelector(".form-control");
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
    container.innerHTML = `<div class="error"> <div class="p-reset"><p class="text-center">Sorry Man.!! No events found</p> <a href="./index.html"><img src="./assets/img/reset.png" alt="reset"> </a></div> 
    <img src="./assets/img/error.webp" alt="error"> </div>`;
  }
});





//check
const categories = [...new Set(data.events.map(event => event.category))];

const filtersContainer = document.querySelector(".categorys");

categories.forEach(category => {
  const filter = document.createElement("input");
  filter.setAttribute("type", "checkbox");
  filter.setAttribute("id", category);
  filter.setAttribute("value", category);

  const label = document.createElement("label");
  label.setAttribute("for", category);
  label.innerText = category;

  filtersContainer.appendChild(filter);
  filtersContainer.appendChild(label);

  filter.addEventListener("change", () => {
    const selectedCategories = Array.from(filtersContainer.querySelectorAll("input:checked"))
      .map(checkbox => checkbox.value);

    const cards = document.querySelectorAll(".card");
    let hay = false;

    cards.forEach(card => {
      if (selectedCategories.includes(card.getAttribute("data-type"))) {
        hay = true;
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });

    if (!hay) {
      container.innerHTML = `<div class="error"> <div class="p-reset"><p class="text-center">Sorry Man.!! No events found</p> <a href="./index.html"><img src="./assets/img/reset.png" alt="reset"> </a></div>
      <img src="./assets/img/error.webp" alt="error"> </div>`;
    }
  });
});


