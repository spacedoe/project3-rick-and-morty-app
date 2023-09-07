import { nextButton, prevButton, page, pagination } from "../../index.js";


export function nextButtonClick (){
    nextButton.onclick = () => {
        page++;
        page < 42 ? (nextButton.disabled = false) : (nextButton.disabled = true);
        cardContainer.innerHTML = "";
        fetchCharacters();
        pagination.innerHTML = `${page} / ${maxPage}`;
      };
} 


export function prevButtonClick() { 
    prevButton.onclick = () => {
        page--;
        page === 1 ? (prevButton.disabled = true) : (prevButton.disabled = false);
        cardContainer.innerHTML = "";
        fetchCharacters();
        pagination.innerHTML = `${page} / ${maxPage}`;
      };
}