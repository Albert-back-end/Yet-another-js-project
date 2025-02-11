const inputTitle = document.getElementById("input-title")
const inputDescription = document.getElementById("input-description")
const inputImage = document.getElementById("input-image-url")
const addButton = document.getElementById("addButton")
const clearButton = document.getElementById("clearButton")
const cardsList = document.getElementById("cards")

let cardsArray = []

function createCard() {
    let card = {
        title: inputTitle.value,
        image: inputImage.value,
        desc: inputDescription.value
    }

    cardsArray.push(card)
    addCardToHTML(card)

    inputTitle.value = ""
    inputDescription.value = ""
    inputImage.value = ""
}

function addCardToHTML(card) {
    let newCard = document.createElement("div")
    newCard.className = "card-item"

    let img = document.createElement("img")
    img.src = card.image

    let title = document.createElement("h1")
    title.textContent = card.title

    let desc = document.createElement("h3")
    desc.textContent = card.desc

    let cardButtonsSection = document.createElement("div")
    cardButtonsSection.className = "card-btns"

    let deleteButton = document.createElement("button")
    deleteButton.type = "button"
    deleteButton.className = "delete-button"
    deleteButton.addEventListener("click", deleteCard)

    let likeButton = document.createElement("button")
    likeButton.type = "button"
    likeButton.className = "like-button"
    likeButton.addEventListener("click", likeCard)


    if (title.textContent !== "" && desc.textContent !== "") {
        newCard.appendChild(img)
        newCard.appendChild(title)
        newCard.appendChild(desc)

        cardButtonsSection.appendChild(deleteButton)
        cardButtonsSection.appendChild(likeButton)

        newCard.appendChild(cardButtonsSection)

        cardsList.appendChild(newCard)
    } else {
        alert("Title, description or url is empty!")
    }
}

function deleteCard(event) {
    let btn = event.target
    let card = btn.closest('.card-item')

    console.log(card)

    let index = cardsArray.findIndex(function(cardItem) {
        return cardItem.title === card.querySelector("h1").textContent
    })

    console.log(index)

    if (index !== -1) {
        cardsArray.splice(index, 1)//delete card from array
        card.remove()//delete card
    } else {
        console.log("Card not found")
    }
}

function likeCard(event) {
    let btn = event.target
    btn.classList.toggle("like-button__active")
}

function clearCards() {
    cardsArray = []
    cardsList.innerHTML = ""
}

addButton.addEventListener("click", createCard)
clearButton.addEventListener("click", clearCards)
