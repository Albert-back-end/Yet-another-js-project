const inputTitle = document.getElementById("input-title")
const inputDescription = document.getElementById("input-description")
const inputImage = document.getElementById("input-image-url")
const addButton = document.getElementById("addButton")
const clearButton = document.getElementById("clearButton")
const cardsList = document.getElementById("cards")
const cardTemplate = document.getElementById("card-temp").content

createAndAddDefaultCards()

function createAndAddDefaultCards() {
    let cardsArray = [
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
        "../assets/images/image1.png",
        "../assets/images/image2.png",
        "../assets/images/image3.png",
        "../assets/images/image4.png"
    ]

    return randomImages[Math.floor(Math.random() * 4)]
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
    cardsList.innerHTML = ""
}

addButton.addEventListener("click", createCard)
clearButton.addEventListener("click", clearCards)
