import { fetchDataUp, createCardUp, createChecksUp, filterCardsUp, searchCardsUp } from "./module/funciones.js"
const container = document.getElementById("container");
const filtersContainer = document.querySelector(".categorys");
const searchInput = document.querySelector(".form-control");

//check
filtersContainer.addEventListener("change", () => {
  const selectedCategories = Array.from(filtersContainer.querySelectorAll("input:checked")).map(checkbox => checkbox.value)

  const cards = document.querySelectorAll(".card")

  const search = searchInput.value.toLowerCase()
  searchCardsUp(search, selectedCategories, cards)
})

//search
searchInput.addEventListener("keyup", e => {
  const search = e.target.value.toLowerCase();
  const cards = document.querySelectorAll(".card");
  const selectedCategories = Array.from(filtersContainer.querySelectorAll("input:checked")).map(
    checkbox => checkbox.value
  );

  searchCardsUp(search, selectedCategories, cards);
});


fetchDataUp()
createCardUp()
createChecksUp()
filterCardsUp()
searchCardsUp()
