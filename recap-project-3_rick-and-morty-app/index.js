import { createCharacterCard } from "./components/card/card.js";
// import { nextButton, prevButton } from "./components/nav-button/nav-button.js";
import {
  nextButtonClick,
  prevButtonClick
} from "./components/nav-button/nav-button.js";

const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');

export const cardContainer = document.querySelector(
  '[data-js="card-container"]'
);

const navigation = document.querySelector('[data-js="navigation"]');
export const prevButton = document.querySelector('[data-js="button-prev"]');
export const nextButton = document.querySelector('[data-js="button-next"]');
export const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 42;
export let page = 1;
pagination.innerHTML = `${page} / ${maxPage}`;
const searchQuery = "";



async function fetchCharacters() {
  try {
    console.log(page);
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}`
    );
    console.log(response.url);
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



prevButton.addEventListener("click", onClick)
nextButton.addEventListener("click", onClick)
