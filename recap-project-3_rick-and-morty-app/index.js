import { createCharacterCard } from "./components/card/card.js";
import { characterName } from "./components/search-bar/search-bar.js";

const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);

const searchBar = document.querySelector('[data-js="search-bar"]');
// console.log(searchBar);
// const searchSumbit = document.querySelector(".search-bar__button");

export const cardContainer = document.querySelector(
  '[data-js="card-container"]'
);

// const navigation = document.querySelector('[data-js="navigation"]');
export const prevButton = document.querySelector('[data-js="button-prev"]');
export const nextButton = document.querySelector('[data-js="button-next"]');
export const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 42;
export let page = 1;
pagination.innerHTML = `${page} / ${maxPage}`;

let searchQuery = " ";

async function fetchCharactersName(urL) {
  let url = urL;
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      const cards = data.results;
      cards.forEach((card) => {
        let cardElement = createCharacterCard(card);
        cardContainer.append(cardElement);
      });
    } else {
      console.log("Bad response!");
    }
  } catch (e) {
    console.error(e);
  }
}

searchBar.addEventListener("submit", (event) => {
  event.preventDefault();
  searchQuery = event.target.query.value;
  // console.log(searchQuery);
  let urL = `https://rickandmortyapi.com/api/character?name=${searchQuery}`;
  console.log(urL);
  return fetchCharactersName(urL);
});

async function fetchCharacters() {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}?name=${searchQuery}`
    );
    if (response.ok) {
      const data = await response.json();
      const cards = data.results;
      cards.forEach((card) => {
        let cardElement = createCharacterCard(card);
        cardContainer.append(cardElement);
      });
    } else {
      console.log("Bad response!");
    }
  } catch (e) {
    console.error(e);
  }
}
fetchCharacters();
