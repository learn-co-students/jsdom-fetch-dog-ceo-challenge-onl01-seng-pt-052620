console.log('%c HI', 'color: firebrick')


function fetchDogs() {
    return fetch("https://dog.ceo/api/breeds/image/random/4")
        .then((resp) => resp.json())
        .then((json) => { 
        console.log(json)
        renderDogs(json)
});
}

function renderDogs(dogs) {
    const div = document.querySelector("div")
    dogs.forEach((dog) => {
       const img = document.createElement("img")
       img.innerHTML = dog.name
       div.appendChild(img)
    })
}

document.addEventListener("DOMContentLoaded", function(){
    fetchDogs();
})




// function fetchBooks() {
//     return fetch("https://anapioficeandfire.com/api/books") //Fetching info from an API which will return a promise
//       .then((resp) => resp.json()) //Return the response into JSON
//       .then((json) => {
//         console.log(json); //Accepts the JSON from the previous .then and console.log it
//         renderBooks(json); //Passing json into renderBooks
//       });
//   }
  
//   function renderBooks(books) {
//     const main = document.querySelector("main");
//     books.forEach((book) => {
//       const h2 = document.createElement("h2");
//       h2.innerHTML = book.name;
//       main.appendChild(h2);
//     });
//   }
  
//   document.addEventListener("DOMContentLoaded", function () {
//     fetchBooks();
//   });
  
//   fetch("https://someAPIroute.com/")
//     .then((resp) => resp.json())
//     .then((json) => {
//       //send that response somewhere else to be handled} )
//     });
  
  
  
    