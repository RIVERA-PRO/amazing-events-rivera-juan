export async function fetchData() {
    const response = await fetch("https://mindhub-xj03.onrender.com/api/amazing");
    const data = await response.json();
    return data;
}

export async function createCard() {
    const data = await fetchData();
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
}


export async function createChecks() {
    const data = await fetchData();
    const categories = [...new Set(data.events.map(event => event.category))];
    const filtersContainer = document.querySelector(".categorys");
    categories.forEach(category => {
        const filter = `
          <input type="checkbox" id="${category}" value="${category}" />
          <label for="${category}">${category}</label>`

        filtersContainer.innerHTML += filter
    });
}

export function filterCards(selectedCategories, cards) {
    if (selectedCategories.length === 0) {
        cards.
            forEach(card => {
                card.style.display = "block"
            })
        return
    }

    cards.forEach(card => {
        if (selectedCategories.includes(card.getAttribute("data-type"))) {
            card.style.display = "block"
        } else {
            card.style.display = "none"
        }
    })
}


export function searchCards(search, selectedCategories, cards) {
    // let hay = false;

    cards.forEach(card => {
        const name = card.querySelector(".card-title").innerText.toLowerCase();
        const category = card.getAttribute("data-type");
        if (
            (name.startsWith(search)) &&
            (selectedCategories.includes(category) || selectedCategories.length === 0)
        ) {
            // hay = true;
            card.style.display = "block";
        } else {
            card.style.display = "none"

        }
    });

    // if (!hay) {
    //     container.innerHTML = `
    //     <div class="error">
    //       <div class="p-reset">
    //         <p class="text-center">Sorry Man.!! No events found</p>
    //         <a href="./index.html">
    //           <img src="./assets/img/reset.png" id="reset">
    //         </a>
    //       </div>
    //       <img src="./assets/img/error.webp" alt="error">
    //     </div>
    //   `;
    // }
}

function error() {
    container.innerHTML = `
    <div class="error">
       <div class="p-reset">
        <p class="text-center">Sorry Man.!! No events found</p>
         <a href="./index.html">
              <img src="./assets/img/reset.png" id="reset">
         </a>
       </div>
       <img src="./assets/img/error.webp" alt="error">
    </div>
   `;
}



//UPCOMING EVENT ------------------------------------------------

export async function fetchDataUp() {
    const response = await fetch("https://mindhub-xj03.onrender.com/api/amazing");
    const data = await response.json();
    return data;
}

export async function createCardUp() {
    const response = await fetch('https://mindhub-xj03.onrender.com/api/amazing');
    const data = await response.json();
    const currentDate = new Date("2022-09-01"); // fecha límite para filtrar eventos pasados
    const eventInfo = data.events.filter(event => {
        const eventDate = new Date(event.date);
        return eventDate > currentDate;
    });
    const cards = eventInfo.map(event => {
        return `
        <div class="card m-2" style="width: 13rem;" data-type="${event.category}">
          <img src="${event.image}" class="card-img-top" alt="${event.name}" style="height: 7rem;">
          <div class="card-body">
            <h5 class="card-title">${event.name}</h5>
            <p class="card-text">${event.date}</p>
            <div class="d-flex justify-content-around">
              <p class="card-price">$${event.price}</p>
              <a href="./descripcion.html?_id=${event._id}" class="btn text-light">More</a>
            </div>
          </div>
        </div>
      `;
    }).join("");
    container.innerHTML += cards;
}


export async function createChecksUp() {
    const data = await fetchDataUp();
    const categories = [...new Set(data.events.map(event => event.category))];
    const filtersContainer = document.querySelector(".categorys");
    categories.forEach(category => {
        const filter = ` <input type="checkbox" id="${category}" value="${category}" /> <label for="${category}">${category}</label>`

        filtersContainer.innerHTML += filter
    });
}

export function filterCardsUp(selectedCategories, cards) {
    if (selectedCategories.length === 0) {
        cards.
            forEach(card => {
                card.style.display = "block"
            })
        return
    }

    cards.forEach(card => {
        if (selectedCategories.includes(card.getAttribute("data-type"))) {
            card.style.display = "block"
        } else {
            card.style.display = "none"
        }
    })
}

export function searchCardsUp(search, selectedCategories, cards) {
    let hay = false;

    cards.forEach(card => {
        const name = card.querySelector(".card-title").innerText.toLowerCase();
        const category = card.getAttribute("data-type");
        if (
            (name.startsWith(search)) &&
            (selectedCategories.includes(category) || selectedCategories.length === 0)
        ) {
            hay = true;
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });

    if (!hay) {
        container.innerHTML = `
        <div class="error">
          <div class="p-reset">
            <p class="text-center">Sorry Man.!! No events found</p>
            <a href="./index.html">
              <img src="./assets/img/reset.png" id="reset">
            </a>
          </div>
          <img src="./assets/img/error.webp" alt="error">
        </div>
      `;
    }
}



//PAST EVENT ------------------------------------------------

export async function fetchDataPast() {
    const response = await fetch("https://mindhub-xj03.onrender.com/api/amazing");
    const data = await response.json();
    return data;
}
export async function createCardPast() {
    const data = await fetchData();
    const currentDate = new Date("2022-09-01"); // fecha límite para filtrar eventos pasados
    const eventInfo = data.events.filter(event => {
        const eventDate = new Date(event.date);
        return eventDate < currentDate;
    });
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
}

export async function createChecksPast() {
    const data = await fetchData();
    const categories = [...new Set(data.events.map(event => event.category))];
    const filtersContainer = document.querySelector(".categorys");
    categories.forEach(category => {
        const filter = ` <input type="checkbox" id="${category}" value="${category}" /> <label for="${category}">${category}</label>`

        filtersContainer.innerHTML += filter
    });
}

export function filterCardsPast(selectedCategories, cards) {
    if (selectedCategories.length === 0) {
        cards.
            forEach(card => {
                card.style.display = "block"
            })
        return
    }

    cards.forEach(card => {
        if (selectedCategories.includes(card.getAttribute("data-type"))) {
            card.style.display = "block"
        } else {
            card.style.display = "none"
        }
    })
}

export function searchCardsPast(search, selectedCategories, cards) {
    let hay = false;

    cards.forEach(card => {
        const name = card.querySelector(".card-title").innerText.toLowerCase();
        const category = card.getAttribute("data-type");
        if (
            (name.startsWith(search)) &&
            (selectedCategories.includes(category) || selectedCategories.length === 0)
        ) {
            hay = true;
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });

    if (!hay) {
        container.innerHTML = `
        <div class="error">
          <div class="p-reset">
            <p class="text-center">Sorry Man.!! No events found</p>
            <a href="./index.html">
              <img src="./assets/img/reset.png" id="reset">
            </a>
          </div>
          <img src="./assets/img/error.webp" alt="error">
        </div>
      `;
    }
}

















