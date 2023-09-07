export function submitButton() {
  const searchSumbit = document.querySelector(".search-bar__button");
  searchSumbit.addEventListener("sumbit", () => {});
}

export async function characterName(searchQuery) {
  const response = await fetch(`https://rickandmortyapi.com/api/character`);
  if (response.ok) {
    const data = await response.json();
    const characters = data.results;
    characters.forEach((character) => {
      if (character.name === searchQuery) {
        console.log(character.name);
      }
    });
  }
}
