export function createCharacterCard({ id, name, status, species, type, episode }) {
  const cardEl = document.createElement("li");
  cardEl.className = "card";

  cardEl.innerHTML = `
  <div class="card__image-container">
  <img
  class="card__image"
  src="https://rickandmortyapi.com/api/character/avatar/${id}.jpeg"
  alt="${name}"
  />
  <div class="card__image-gradient"></div>
  </div>
  <div class="card__content">
  <h2 class="card__title">${name}</h2>
  <dl class="card__info">
  <dt class="card__info-title">Status:</dt>
  <dd class="card__info-description">${status}</dd>
  <dt class="card__info-title">Species:</dt>
  <dd class="card__info-description">${species}</dd>
  <dt class="card__info-title">Type:</dt>
  <dd class="card__info-description">${type}</dd>
  <dt class="card__info-title">Occurrences:</dt>
  <dd class="card__info-description">${episode.length}</dd>
  </dl>
  </div>
  `;

  return cardEl;
}
