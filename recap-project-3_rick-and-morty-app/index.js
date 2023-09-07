import { createCharacterCard } from "./components/card/card.js";
import { characterName } from "./components/search-bar/search-bar.js";
import { createButton } from "./components/nav-button/nav-button.js";

const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);

const searchBar = document.querySelector('[data-js="search-bar"]');
// console.log(searchBar);
// const searchSumbit = document.querySelector(".search-bar__button");

export const cardContainer = document.querySelector(
  '[data-js="card-container"]'
);

const navigation = document.querySelector('[data-js="navigation"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
export const maxPage = 42;
export let page = 41;
pagination.innerHTML = `${page} / ${maxPage}`;

let searchQuery = " ";

export async function fetchCharacters() {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}`
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

searchBar.addEventListener("submit", (event) => {
  event.preventDefault();
  searchQuery = event.target.query.value;
  // console.log(searchQuery);
  let urL = `https://rickandmortyapi.com/api/character?name=${searchQuery}`;
  console.log(urL);
  return fetchCharactersName(urL);
});

fetchCharacters();

const prevButton = createButton("previous", "button--prev", decrementPage);
const nextButton = createButton("next", "button--next", incrementPage);

navigation.append(prevButton);
navigation.append(pagination);
navigation.append(nextButton);

function incrementPage() {
  page++;
  console.log(page);
  if (page === 42) {
    nextButton.disabled = true;
  } else {
    nextButton.disabled = false;
    prevButton.disabled = false;
  }
  // page < 42 ? (nextButton.disabled = false) : (nextButton.disabled = true);
  cardContainer.innerHTML = "";
  fetchCharacters();
  pagination.innerHTML = `${page} / ${maxPage}`;
}

function decrementPage() {
  page--;
  console.log(page);
  if (page === 1) {
    prevButton.disabled = true;
  } else {
    prevButton.disabled = false;
    nextButton.disabled = false;
  }

  // page === 1 ? (prevButton.disabled = true) : (prevButton.disabled = false);
  cardContainer.innerHTML = "";
  fetchCharacters();
  pagination.innerHTML = `${page} / ${maxPage}`;
}
