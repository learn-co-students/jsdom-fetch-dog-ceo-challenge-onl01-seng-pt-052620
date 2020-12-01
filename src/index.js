console.log('%c HI', 'color: firebrick')

let breedsList

document.addEventListener("DOMContentLoaded", () => {
    loadImages();
    loadBreeds();
    filterBreeds();
});

function loadImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(`${imgUrl}`)
        .then(resp => resp.json())
        .then(json => addImages(json));
}

function loadBreeds() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(`${breedUrl}`)
        .then(resp => resp.json())
        .then(json => addBreeds(json));
}

function addImages(images) {
    const imageContainer = document.getElementById('dog-image-container')
    images.message.forEach(image => {
        const img = document.createElement('img')
        img.src = image
        img.alt = "image of a dog"
        imageContainer.appendChild(img)
    });
}

function addBreeds(breeds) {
    const breedContainer = document.getElementById('dog-breeds')
    const breedsArray = Object.keys(breeds.message)
    breedsList = breedsArray
    breedsArray.forEach(breed => {
        const li = document.createElement('li')
        li.textContent = breed
        li.id = breed
        li.className = 'dog-breeds'
        breedContainer.appendChild(li)
        li.addEventListener('click', () => {
            changeColor(breed);
        })
    })
}

function changeColor(id) {
    let string = document.getElementById(id)
    string.style.color = randomColor()
}

function randomColor() {
    return '#' + ('00000' + (Math.random() * 16777216 << 0).toString(16)).substr(-6);
}

function filterBreeds() {
    const dropDown = document.getElementById('breed-dropdown');
    console.log(dropDown)
    dropDown.addEventListener('change', () => {
        const userSelection = dropDown.value
        let filteredBreeds = []
        breedsList.forEach(breed => {
            if (breed[0] === userSelection) {
                filteredBreeds.push(breed)
            }
        })
        const breedContainer = document.getElementById('dog-breeds')
        breedContainer.innerHTML = ""
        filteredBreeds.forEach(breed => {
            const li = document.createElement('li')
            li.textContent = breed
            li.id = breed
            li.className = 'dog-breeds'
            breedContainer.appendChild(li)
            li.addEventListener('click', () => {
                changeColor(breed);
            })
        })
    })
}

