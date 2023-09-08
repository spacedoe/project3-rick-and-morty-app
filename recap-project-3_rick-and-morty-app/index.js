import { createCharacterCard } from "./components/card/card.js";
// import { characterName } from "./components/search-bar/search-bar.js";
import { createButton } from "./components/nav-button/nav-button.js";
import { createPagination } from "./components/nav-pagination/nav-pagination.js";
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);

const searchBar = document.querySelector('[data-js="search-bar"]');

export const cardContainer = document.querySelector(
  '[data-js="card-container"]'
);

export const navigation = document.querySelector('[data-js="navigation"]');

// States
let maxPage = 1;
let page = 1;
let searchQuery = "";


async function fetchCharacters() {
  try {
    // console.log(searchQuery);
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}&name=${searchQuery}`
    );
    console.log("response", response);
    if (response.ok) {
      const data = await response.json();
      const characters = data.results;
      const characterCards = characters
        .map((character) => {
          return createCharacterCard(character);
        })
        .join("");
      cardContainer.innerHTML = characterCards;
      maxPage = data.info.pages;
      pagination.textContent = `${page} / ${maxPage}`;

      if (page === 1) {
        prevButton.disabled = true;
      } else if (page === maxPage) {
        nextButton.disabled = true;
      }
      console.log(page, maxPage);
    } else {
      cardContainer.innerHTML = ` <li class="card-not-found">
      <div class="card__image-container">
      <img
      class="card__image-not-found"
      src="./assets/notfound.gif"
      alt="not found"
      />`;
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
  fetchCharacters(page, searchQuery);
});

const prevButton = createButton("previous", "button--prev", decrementPage);
const pagination = createPagination(`${page} / ${maxPage}`);
const nextButton = createButton("next", "button--next", incrementPage);

navigation.append(prevButton);
navigation.append(pagination);
navigation.append(nextButton);

function incrementPage() {
  if (page < 42) {
    page++;
    cardContainer.innerHTML = "";
    fetchCharacters(searchQuery);

    prevButton.disabled = false;
  }
}

function decrementPage() {
  if (page > 1) {
    page--;
    cardContainer.innerHTML = "";
    fetchCharacters(searchQuery);

    nextButton.disabled = false;
  }
}
fetchCharacters(searchQuery);
