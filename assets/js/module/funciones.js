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
              <a  href="./descripcion.html?id=${recInfo._id}" class="btn text-light">More</a>
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





//UPCOMING EVENT ------------------------------------------------

export async function fetchDataUp() {
    const response = await fetch("https://mindhub-xj03.onrender.com/api/amazing");
    const data = await response.json();
    return data;
}

export async function createCardUp() {
    const data = await fetchData();
    const currentDate = new Date("2022-09-01"); // fecha límite para filtrar eventos pasados
    const eventInfo = data.events.filter(event => {
        const eventDate = new Date(event.date);
        return eventDate > currentDate;
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
              <a  href="./descripcion.html?id=${recInfo._id}&nombre=${recInfo.name}" class="btn text-light">More</a>
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


    cards.forEach(card => {
        const name = card.querySelector(".card-title").innerText.toLowerCase();
        const category = card.getAttribute("data-type");
        if (
            (name.startsWith(search)) &&
            (selectedCategories.includes(category) || selectedCategories.length === 0)
        ) {

            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });


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
              <a  href="./descripcion.html?id=${recInfo._id}&nombre=${recInfo.name}" class="btn text-light">More</a>
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


    cards.forEach(card => {
        const name = card.querySelector(".card-title").innerText.toLowerCase();
        const category = card.getAttribute("data-type");
        if (
            (name.startsWith(search)) &&
            (selectedCategories.includes(category) || selectedCategories.length === 0)
        ) {

            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });


}



//STATS------------------------------------------------


export async function getData() {
    try {
        const response = await fetch("https://mindhub-xj03.onrender.com/api/amazing")
        const data = await response.json()
        return data
    }
    catch (error) {
        console.log(`Error: ${error}`)
    }
}


export function filterUpcoming(events, date) {
    let upcomingFilter = []
    for (let event of events) {
        if (date < event.date) {
            upcomingFilter.push(event)
        }
    }
    return upcomingFilter
}

export function filterPast(events, date) {
    let pastEvents = []
    for (let event of events) {
        if (date > event.date) {
            pastEvents.push(event)
        }
    }
    return pastEvents
}

export function porcentajeMasAltoAsistencia(events) {
    let highest = 0
    let highestEvent
    for (let event of events) {
        let percentageOfAttendance = (event.assistance * 100) / event.capacity
        if (highest === 0 || percentageOfAttendance > highest) {
            highest = percentageOfAttendance
            highestEvent = event
        }
    }
    return highestEvent
}

export function porcentajeMasBajoAsistencia(events) {
    let lowest = 0
    let lowestEvent
    for (let event of events) {
        let percentageOfAttendance = (event.assistance * 100) / event.capacity
        if (lowest === 0 || percentageOfAttendance < lowest) {
            lowest = percentageOfAttendance
            lowestEvent = event
        }
    }
    return lowestEvent
}

export function mayorCapacidad(events) {
    let larger = 0
    let largerCapacityEvent
    for (let event of events) {
        if (larger === 0 || event.capacity > larger) {
            larger = event.capacity
            largerCapacityEvent = event
        }
    }
    return largerCapacityEvent
}

export function upcomingEventsStatistics(events) {
    let upcomingStatistics = [] // ARRAY TO SAVE 3 LIST OF ELEMENTS
    let upcomingCategories = Array.from(new Set(events.map(event => event.category))) // CATEGORIES OF THE EVENTS


    let upcomingRevenues = [] // REVENUES FROM THE EVENTS
    for (let category of upcomingCategories) {
        let revenueCont = 0
        for (let event of events) {
            if (event.category === category) {
                revenueCont += event.estimate * event.price
            }
        }
        upcomingRevenues.push(revenueCont)
    }


    let upcomingPercentageOfAttendance = [] // PERCENTAGE OF ATTENDANCE
    for (let category of upcomingCategories) {
        let estimateAttendance = 0
        let capacity = 0
        for (let event of events) {
            if (event.category === category) {
                estimateAttendance += event.estimate
                capacity += event.capacity
            }
        }
        upcomingPercentageOfAttendance.push((estimateAttendance * 100) / capacity)
    }


    upcomingStatistics.push(upcomingCategories, upcomingRevenues, upcomingPercentageOfAttendance)
    return upcomingStatistics
}


export function pastEventsStatistics(events) {
    let pastStatistics = [] // ARRAY TO SAVE 3 LIST OF ELEMENTS
    let pastCategories = Array.from(new Set(events.map(event => event.category))) // CATEGORIES OF THE EVENTS


    let pastRevenues = [] // REVENUES FROM THE EVENTS
    for (let category of pastCategories) {
        let revenueCont = 0
        for (let event of events) {
            if (event.category === category) {
                revenueCont += event.assistance * event.price
            }
        }
        pastRevenues.push(revenueCont)
    }


    let pastPercentageOfAttendance = [] // PERCENTAGE OF ATTENDANCE
    for (let category of pastCategories) {
        let assistance = 0
        let capacity = 0
        for (let event of events) {
            if (event.category === category) {
                assistance += event.assistance
                capacity += event.capacity
            }
        }
        pastPercentageOfAttendance.push((assistance * 100) / capacity)
    }


    pastStatistics.push(pastCategories, pastRevenues, pastPercentageOfAttendance)
    return pastStatistics
}




//DETAILS------------------------------------------------

export function addDetailsCard(events, cards) {
    cards.innerHTML = detailsCard(events);
}

export function detailsCard(event) {
    return `<div class="img-des">
    <img src="${event.image}" alt="${event.name}">
    </div>
    <div class="text-des">
    <h5 class="name">${event.name}</h5>
    <h6 class="date"> ${event.date}</h6>
    <p class="description"> ${event.description}.</p>
    <p class="category"> <span>Category:</span> ${event.category}</p>
    <p class="place"> <span>Place:</span> ${event.place}</p>
    <p class="capacity"> <span>Capacity:</span> ${event.capacity}</p>
  
    <p class="price">$${event.price}</p>
    </div>`;
}

