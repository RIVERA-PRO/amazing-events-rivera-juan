
import { fetchData, createCard, createChecks, filterCards, searchCards } from "./module/funciones.js"

const container = document.getElementById("container");
const filtersContainer = document.querySelector(".categorys");
const searchInput = document.querySelector(".form-control");

//check event
filtersContainer.addEventListener("change", () => {
  const selectedCategories = Array.from(filtersContainer.querySelectorAll("input:checked")).map(checkbox => checkbox.value)

  const cards = document.querySelectorAll(".card")

  filterCards(selectedCategories, cards)
})


//search event
searchInput.addEventListener("keyup", e => {
  const search = e.target.value.toLowerCase();
  const cards = document.querySelectorAll(".card");
  const selectedCategories = Array.from(filtersContainer.querySelectorAll("input:checked")).map(
    checkbox => checkbox.value
  );

  searchCards(search, selectedCategories, cards);
});


fetchData()
createCard();
createChecks();
filterCards()