console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", () => {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(json => {json.message.forEach(dog => {
      let dogImageContainer = document.getElementById("dog-image-container")
        let dogImage = document.createElement("img")
        dogImage.setAttribute("src",dog)
        dogImageContainer.appendChild(dogImage)  
    })})

    fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(json => {
        let breedArray = Object.keys(json.message)
        breedArray.forEach(breed => {
            let breedList = document.getElementById("dog-breeds")
            let breedBullet = document.createElement("li")
            breedBullet.innerText = breed
            breedList.appendChild(breedBullet)
            breedBullet.addEventListener("click", () =>{
                breedBullet.style.color = "#00f"
        })})})
    .then(json => {
        let breedDropDown = document.getElementById("breed-dropdown")
        let newBreed = document.querySelectorAll("li")
        breedDropDown.addEventListener("change", () => {
            newBreed.forEach(breedLetter => {
                if (breedLetter.innerText.startsWith(breedDropDown.value)) 
                {breedLetter.removeAttribute("hidden")} 
                else 
                {breedLetter.setAttribute("hidden", "")}
            })
        })

    })
   
})