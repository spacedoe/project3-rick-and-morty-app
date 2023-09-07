import {
  cardContainer,
  nextButton,
  prevButton,
  page,
  pagination,
} from "../../index.js";

export function onClick(props) {
  if (props) {
    return page++;
  } else {
    return page--;
  }
  page < 42 ? (nextButton.disabled = false) : (nextButton.disabled = true);
  cardContainer.innerHTML = "";
  fetchCharacters();
  pagination.innerHTML = `${page} / ${maxPage}`;
}
