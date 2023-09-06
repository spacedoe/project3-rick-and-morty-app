const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
const page = 1;
const searchQuery = "";

const url = "https://rickandmortyapi.com/api/character";

async function fetchCharacters() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      const cards = data.results;
      cards.forEach((card) => createCharacterCard(card));
    } else {
      console.log("Bad response!");
    }
  } catch (e) {
    console.error(e);
  }
}

fetchCharacters();
