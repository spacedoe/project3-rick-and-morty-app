export function createPagination(text) {

    const pagination = document.createElement("span")
    pagination.textContent = text
    pagination.classList.add("navigation__pagination")


    return pagination 
}


