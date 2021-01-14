console.log("%c HI", "color: firebrick");

const apiPicUrl = "https://dog.ceo/api/breeds/image/random/4";
const apiBreedUrl = "https://dog.ceo/api/breeds/list/all";

function getDogImages() {
  return fetch(apiPicUrl)
  .then(response => response.json())
  .then(json => injectDogImages(json));
}

function getDogBreeds() {
  return fetch(apiBreedUrl)
  .then(response => response.json())
  .then(json => injectDogBreeds(json));
}

function toggleTextColor(event) {
  if (event.target.nodeName == "LI") {
    event.target.classList.toggle("textColor");
  }
}

function injectDogImages(imageURLs) {
  const gallery = document.getElementById("dog-image-container");
  imageURLs.message.forEach(imageURL => {
    const img = document.createElement("img")
    img.src = imageURL
    gallery.appendChild(img)
  });
}

function injectDogBreeds(breedNames) {
  const list = document.getElementById("dog-breeds");
  Object.keys(breedNames.message).forEach(breedName => {
    const li = document.createElement("li")
    const bn = document.createTextNode(breedName);
    li.appendChild(bn);
    list.appendChild(li);
  });
  list.addEventListener("click", toggleTextColor, false);
}

document.addEventListener("DOMContentLoaded", getDogImages(), getDogBreeds());
