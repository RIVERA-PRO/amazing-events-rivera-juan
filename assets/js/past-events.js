import { fetchDataPast, createCardPast, createChecksPast, filterCardsPast, searchCardsPast } from "./module/funciones.js"
const container = document.getElementById("container");
const searchInput = document.querySelector(".form-control");
const filtersContainer = document.querySelector(".categorys");



//check
filtersContainer.addEventListener("change", () => {
  const selectedCategories = Array.from(filtersContainer.querySelectorAll("input:checked")).map(checkbox => checkbox.value)

  const cards = document.querySelectorAll(".card")

  const search = searchInput.value.toLowerCase()
  searchCardsPast(search, selectedCategories, cards)
})

//search
searchInput.addEventListener("keyup", e => {
  const search = e.target.value.toLowerCase();
  const cards = document.querySelectorAll(".card");
  const selectedCategories = Array.from(filtersContainer.querySelectorAll("input:checked")).map(
    checkbox => checkbox.value
  );

  searchCardsPast(search, selectedCategories, cards);
});



fetchDataPast()
createCardPast()
createChecksPast()
filterCardsPast()
searchCardsPast()
