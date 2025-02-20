import { firstImage, secondImage, thirdmage, fourthImage, styles, mainImageSrc, logoSrc }  from "./imports.js"
import { inputTitle, inputDescription, inputImage, addButton, clearButton, cardsList, cardTemplate, mainImage, logo } from "./domElements.js"

let cardsArray = []

setMainImages()
createAndAddDefaultCards()

function createAndAddDefaultCards() {
    cardsArray = [
        {
            title: "Drink1",
            desc: "Description"
        },

        {
            title: "Drink2",
            desc: "Description"
        },

        {
            title: "Drink3",
            desc: "Description"
        },

        {
            title: "Drink4",
            desc: "Description"
        }
    ]

    cardsArray.forEach((obj) => {
        addEventListToCardButtons(obj)
    })
}

function getRandomImage() {
    const randomImages = [
        firstImage,
        secondImage,
        thirdmage,
        fourthImage
    ]

    return randomImages[Math.floor(Math.random() * 4)]
}

function setMainImages() {
    logo.src = logoSrc
    mainImage.src = mainImageSrc
}

function createCard() {
    if (inputImage.value != "" && inputTitle.value != "" && inputDescription.value) {
        addEventListToCardButtons()
    } else {
        alert("Inputs are empty!")
    }

    inputTitle.value = ""
    inputDescription.value = ""
    inputImage.value = ""
}

function addEventListToCardButtons(obj) {
    let cloneCard = cardTemplate.cloneNode(true)

    cloneCard.querySelector(".img").src = inputImage.value || getRandomImage()
    cloneCard.querySelector("h1").textContent = inputTitle.value || obj.title
    cloneCard.querySelector("h3").textContent = inputDescription.value || obj.desc

    const deleteButton = cloneCard.querySelector(".delete-button")
    const likeButton = cloneCard.querySelector(".like-button")   

    deleteButton.addEventListener("click", deleteCard)
    likeButton.addEventListener("click", likeCard)

    cardsList.appendChild(cloneCard)
}


function deleteCard(event) {
    event.target.closest(".card-item").remove()
}

function likeCard(event) {
    event.target.classList.toggle("like-button__active")
}

function clearCards() {
    cardsArray = []
    cardsList.textContent = ""
}

addButton.addEventListener("click", createCard)
clearButton.addEventListener("click", clearCards)
