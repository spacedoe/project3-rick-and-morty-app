import { createCharacterCard } from "./components/card/card.js";
// import { characterName } from "./components/search-bar/search-bar.js";
import { createButton } from "./components/nav-button/nav-button.js";

const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);

const searchBar = document.querySelector('[data-js="search-bar"]');

export const cardContainer = document.querySelector(
  '[data-js="card-container"]'
);

const navigation = document.querySelector('[data-js="navigation"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
export const maxPage = 42;
export let page = 1;
pagination.innerHTML = `${page} / ${maxPage}`;

let searchQuery = "";

export async function fetchCharacters(searchQuery) {
  try {
    // console.log(searchQuery);
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}&name=${searchQuery}`
    );
    if (response.ok) {
      const data = await response.json();
      const characters = data.results;
      const characterCards = characters
        .map((character) => {
          return createCharacterCard(character);
        })
        .join("");
      cardContainer.innerHTML = characterCards;
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
  console.log("searchQuery", searchQuery);
  fetchCharacters(searchQuery);
});

const prevButton = createButton("previous", "button--prev", decrementPage);
const nextButton = createButton("next", "button--next", incrementPage);

navigation.append(prevButton);
navigation.append(pagination);
navigation.append(nextButton);

function incrementPage() {
  page++;
  if (page === 42) {
    nextButton.disabled = true;
  } else {
    nextButton.disabled = false;
    prevButton.disabled = false;
  }
  // page < 42 ? (nextButton.disabled = false) : (nextButton.disabled = true);
  cardContainer.innerHTML = "";
  fetchCharacters(searchQuery);
  pagination.innerHTML = `${page} / ${maxPage}`;
}

function decrementPage() {
  page--;
  if (page === 1) {
    prevButton.disabled = true;
  } else {
    prevButton.disabled = false;
    nextButton.disabled = false;
  }

  // page === 1 ? (prevButton.disabled = true) : (prevButton.disabled = false);
  cardContainer.innerHTML = "";
  fetchCharacters(searchQuery);
  pagination.innerHTML = `${page} / ${maxPage}`;
}
fetchCharacters(searchQuery);
