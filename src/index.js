function fetchImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

    fetch(imgUrl)
        .then(resp => resp.json())
        .then(json => renderImages(json))
}

let breeds = []

function fetchBreeds() {
    const breedUrl = "https://dog.ceo/api/breeds/list/all"

    fetch(breedUrl)
        .then(resp => resp.json())
        .then(json => {
            breeds = Object.keys(json.message)
            renderBreeds(breeds)
        })
}

function renderImages(images) {
    const imgDiv = document.querySelector("#dog-image-container")
    images.message.forEach(image => {
        const dogImg = document.createElement("img")
        dogImg.src = image
        imgDiv.appendChild(dogImg)
    })
}

function renderBreeds(breeds) {
    const breedUl = document.querySelector("#dog-breeds")
    breeds.forEach(breed => {
        const breedLi = document.createElement("li")
        breedLi.innerText = breed
        breedLi.className = "dog"
        breedUl.appendChild(breedLi)
    })
}

function attachListeners() {
    const breedUl = document.querySelector("#dog-breeds")

    breedUl.addEventListener("click", function(e) {
        if(e.target && e.target.matches("li") && e.target.style.color != "blue") {
            e.target.style.color = "blue"
        } else {
            e.target.style.color = "black"
        }
    })
}

document.addEventListener('DOMContentLoaded', function(e) {
    fetchImages()
    fetchBreeds()
    attachListeners()
})

