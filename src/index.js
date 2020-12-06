console.log('%c HI', 'color: firebrick');

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

let breeds = [];

function fetchImages() {
    let div = document.querySelector('div#dog-image-container');
    fetch(imgUrl).then(resp => resp.json())
            .then(function(json){
                json.message.forEach(image => {
                    const img = document.createElement('img');
                    img.src = image;
                    div.appendChild(img);
                })
            })
        }

function getBreeds() {
    fetch(breedUrl).then(resp => resp.json())
        .then(function(json) {
            breeds = Object.keys(json.message);
            updateBreed(breeds);
            letterChoice();
        })
}

function updateBreed(breedList){
    let ul = document.getElementById('dog-breeds');
    removeBreeds(ul);
    breedList.forEach(breed => {
        const li = document.createElement('li');
        li.innerHTML = breed;
        li.click(style="color: blue")
        ul.appendChild(li);})   
}

function removeBreeds(element) {
    let child = element.lastElementChild;
    while (child) {
      element.removeChild(child);
      child = element.lastElementChild;
    }
  }

function letterChoice() {
   document.getElementById('breed-dropdown').addEventListener('change', function(e){
       filterSelection(e.target.value);
   })
}

function filterSelection(letter) {
    updateBreed(breeds.filter(type => {
        return type.startsWith(letter);
    }));
}
          
   
document.addEventListener('DOMContentLoaded', function() {
        fetchImages()
        getBreeds()
})
        
