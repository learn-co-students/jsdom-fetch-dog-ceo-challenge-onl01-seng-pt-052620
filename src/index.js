console.log('%c HI', 'color: firebrick')
const imgUrl= "https://dog.ceo/api/breeds/image/random/4";
fetch('imgUrl')
.then(response =>response.json())
.then(result =>{
  dogImage(result.message)
})

function dogImages(dogs) {
  console.log(dogs)
  dogs.forEach(dog =>{
    console.log(dog)
    const goodBoyContainer = document.querySelector(#dog-image-contenair)
    const goodBoy = document.createElement('img')
    goodBoy.src = dog
    goodBoyContainer.appendChild(goodBoy)
  });
}
