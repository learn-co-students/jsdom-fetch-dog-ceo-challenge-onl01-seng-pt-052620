console.log('%c HI', 'color: firebrick');

const imgUrl = 'https://dog.ceo/api/breeds/image/random/4';
const breedUrl = 'https://dog.ceo/api/breeds/list/all';

document.addEventListener('DOMContentLoaded', () => {
  // on page load
  fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => {
      json.message.forEach(image => {
        const dogImageContainer = document.getElementById('dog-image-container');
        const newImage = document.createElement('img');
        newImage.setAttribute('src', image);
        dogImageContainer.appendChild(newImage);
      })
    })

  fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => {
      const breedArray = Object.keys(json.message)
      const breedList = document.getElementById('dog-breeds');
      breedArray.forEach(breed => {
        const newBreed = document.createElement('li');
        newBreed.innerText = breed;
        breedList.appendChild(newBreed);
        newBreed.addEventListener('click', () => {
          newBreed.style.color = '#0f0'
        })
      })
    })
    .then(filter => {
      const breeds = document.querySelectorAll('li');
      const userInput = document.getElementById('breed-dropdown');
      userInput.addEventListener('change', () => {
        console.log(userInput.value);
        breeds.forEach(breed => {
          if(breed.innerText.startsWith(userInput.value) === false) {
            breed.setAttribute('hidden', '')
          } else {
            breed.removeAttribute('hidden')
          }
        })
      })
      console.log(breeds);
    })
})