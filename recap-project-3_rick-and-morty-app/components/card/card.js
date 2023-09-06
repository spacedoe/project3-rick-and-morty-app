import { cardSection } from "../../index.js";

export function createCharacterCard(card) {
  const cardContainer = document.createElement("ul");
  cardContainer.className = "card-container";

  cardContainer.innerHTML = `
    <li class="card">
          <div class="card__image-container">
            <img
              class="card__image"
              src="https://rickandmortyapi.com/api/character/avatar/${card.id}.jpeg"
              alt="${card.name}"
            />
            <div class="card__image-gradient"></div>
          </div>
          <div class="card__content">
            <h2 class="card__title">${card.name}</h2>
            <dl class="card__info">
              <dt class="card__info-title">Status:</dt>
              <dd class="card__info-description">${card.status}</dd>
              <dt class="card__info-title">Species:</dt>
              <dd class="card__info-description">${card.species}</dd>
              <dt class="card__info-title">Type:</dt>
              <dd class="card__info-description">${card.type}</dd>
              <dt class="card__info-title">Occurrences:</dt>
              <dd class="card__info-description">${card.episode.length}</dd>
            </dl>
          </div>
        </li>
    `;
  return cardContainer;
}
