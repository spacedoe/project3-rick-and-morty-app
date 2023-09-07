export function createButton(text, buttonClass2, onClick) {
  const button = document.createElement("button");
  button.textContent = text;
  button.classList.add("button");
  button.classList.add(buttonClass2);

  button.addEventListener("click", onClick)

  return button;
}
