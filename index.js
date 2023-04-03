function displayFilm(films){
  let card = document.createElement("li");
  card.className = "card ";
  let availableTickets = films.capacity - films.tickets_sold;
  card.innerHTML = `
      <div>
      <p><b>Title:</b> ${films.title}</p>
      <p><b>Runtime:</b> ${films.runtime}</p>
      <p><b>Capacity:</b> ${films.capacity}</p>
      <p><b>Tickets sold:</b> ${films.tickets_sold}</p>
      <p><b>Description:</b> ${films.description}</p>
       <p><b>Available tickets:</b> ${availableTickets}<p>
      <img src=${films.poster}>
      <button><button>
      </div>
  `;
  document.querySelector("#films").appendChild(card);
}
// function fetchFilms(){
//     fetch("http://localhost:3000/films/1")
//         .then(res => res.json())
//         .then((films)=>{
//             console.log(films)
//         films.forEach((films)=>{
//                 displayFilm(films)
//             })
//         })
//     }
function fetchFilm(){
  fetch("http://localhost:3000/films/1")
      .then(res => res.json())
      .then((film)=>{
          console.log(film)
          displayFilm(film)
      })
}
fetchFilm();
// function displayFilm(films){
//     let card = document.createElement("li");
//     card.className = "card film_item ";
//     let availableTickets = films.capacity - films.tickets_sold;
//     card.innerHTML = `
//         <div>
//         <p><b>Title:</b> ${films.title}</p>
//         <p><b>Runtime:</b> ${films.runtime}</p>
//         <p><b>Capacity:</b> ${films.capacity}</p>
//         <p><b>Tickets sold:</b> ${films.tickets_sold}</p>
//         <p><b>Description:</b> ${films.description}</p>
//          <p><b>Available tickets:</b> ${availableTickets}<p>
//         <img src=${films.poster}>
//         <button data-available-tickets="10">Buy Ticket</button>
//         </div>
//         let availableTickets = 10;
//         let buyTicketButton = document.querySelector("button");
//         buyTicketButton.addEventListener("click", () => {
//          if (availableTickets > 0) {
//           availableTickets--;
//           buyTicketButton.textContent = "Buy Ticket (" + availableTickets + " available)";
//          } else {
//           alert("This showing is sold out.");
//     }
// });
//     `;
//     document.querySelector("#films").appendChild(card);
// }
// function fetchFilms(){
//         fetch("http://localhost:3000/films")
//             .then(res => res.json())
//             .then((films)=>{
//                 console.log(films)
//             films.forEach((films)=>{
//                     displayFilm(films)
//                 })
//             })
//         }
//         fetchFilms()
function displayFilm(film) {
  let card = document.createElement("li");
  card.className = "card film_item ";
  let availableTickets = film.capacity - film.tickets_sold;
  card.innerHTML = `
    <div>
      <p><b>Title:</b> ${film.title}</p>
      <p><b>Runtime:</b> ${film.runtime}</p>
      <p><b>Capacity:</b> ${film.capacity}</p>
      <p><b>Tickets sold:</b> ${film.tickets_sold}</p>
      <p><b>Description:</b> ${film.description}</p>
      <p><b>Available tickets:</b> ${availableTickets}<p>
      <img src=${film.poster}>
      <button data-available-tickets="${availableTickets}">Buy Ticket</button>
    </div>
  `;
  // Select the button element within the card
  let buyTicketButton = card.querySelector("button");
  // Add event listener to update availableTickets and button text
  buyTicketButton.addEventListener("click", () => {
    if (availableTickets > 0) {
      availableTickets--;
      buyTicketButton.dataset.availableTickets = availableTickets;
      buyTicketButton.textContent = `Buy Ticket (${availableTickets} available)`;
    } else {
      alert("This showing is sold out.");
    }
  });
  document.querySelector("#films").appendChild(card);
}
//   function fetchFilms() {
//     fetch("http://localhost:3000/films")
//       .then((res) => res.json())
//       .then((films) => {
//         console.log(films);
//         films.forEach((film) => {
//           displayFilm(film);
//         });
//       });
//   }
//   fetchFilms();
function fetchFilms() {
  fetch("http://localhost:3000/films")
    .then((res) => res.json())
    .then((films) => {
      const filmsList = document.querySelector("#films");
      // Remove the placeholder element from the list
      filmsList.innerHTML = "";
      // Create a list item element for each film and append it to the list
      films.forEach((film) => {
        const filmItem = document.createElement("li");
        filmItem.className = "film item";
        filmItem.textContent = film.title;
        filmsList.appendChild(filmItem);
        // Add event listener to display the film details when the item is clicked
        filmItem.addEventListener("click", () => {
          displayFilm(film);
        });
      });
    });
}
fetchFilms();








// let fetchedData;
//     fetch("http://localhost:3000/films")
//    .then((result) => result.json())
//    .then((result2) => {
//     fetchedData = result2;
//     console.log('results --> ', result2);  
//     beginning(result2);
//    })
//    .catch((error) => console.log(error));
   
//    function buildCard(movie) {
//     const parentDiv = document.createElement('div');
//     parentDiv.className = 'card';
   
//     const img = document.createElement('img');
//     img.src = movie.poster;
//     img.style = 'width:50%';
    
   
//     const innerDiv = document.createElement('div');
//     innerDiv.className = 'container';
   
//     const h4 = document.createElement('h4');
//     h4.textContent = movie.name;
   
//     const availableTickets = movie.capacity - movie.tickets_sold;
   
//     const p = document.createElement('p');
//     p.textContent = availableTickets ? `Tickets available ${availableTickets}` : 'Tickets sold out';
   
//     const btn = document.createElement('button');
//     btn.textContent = `Buy Ticket`;
//     btn.id = `${movie.id} ${movie.tickets_sold} btn`;
//     btn.disabled = !availableTickets;
   
//     const button2 = document.createElement('button');
//     button2.textContent = `Delete`;
//     button2.className = `${movie.id} button-delete`;
//     button2.disabled = availableTickets;
   
   
//     parentDiv.append(img);
//     parentDiv.append(innerDiv);
//     innerDiv.append(h4);
//     innerDiv.append(p);
//     innerDiv.append(btn);
//     innerDiv.append(button2);
   
   
//     return parentDiv;
//    }
//    const beginning = (films) => {
   
//     const mainDiv = document.createElement('div');
//     mainDiv.className = 'main';
   
//     document.body.appendChild(mainDiv);
   
//     films.forEach(films => {
//      const card = buildCard(films);
//      mainDiv.append(card);
//     });
    
//    };
   
//    const clickCallback = (e) => {
//     e.preventDefault();
//     if (e.target.getAttribute('id')) {
//     const combinedIdbuy = e.target.getAttribute('id');
//     const id = combinedIdbuy?.split(" ")[0];
//     const tickets_sold = combinedIdbuy?.split(" ")[1];
//     buyTicket(id, tickets_sold);
    
//     }
//     if (e.target.getAttribute('class')) {
//      const combinedIdbuy = e.target.getAttribute('class');
//      const id = combinedIdbuy?.split(" ")[0];
//      deleteMovie(id);
//      }
//    };
   
//    const buyTicket = (id, tickets_sold) => {
//     fetch(`http://localhost:3000/films/${Number(id)}`, {
//     method: 'PATCH',
//     headers: {
//      "Content-Type": "application/json"
//     },
//     body: JSON.stringify(
//      {
//       id: Number(id),
//       tickets_sold: Number(tickets_sold) + 1
//      }
//     )
//    })
//    .then((result) => result.json())
//    .then((result2) => console.log(result2))
//    .catch((error) => console.log(error));
//    };
   
//    const deleteMovie = (id) => {
//     fetch(`http://localhost:3000/films/${Number(id)}`, {
//     method: 'DELETE',
//     headers: {
//      "Content-Type": "application/json"
//     },
//    })
//    .then((result) => result.json())
//    .then((result2) => console.log(result2))
//    .catch((error) => console.log(error));
//    };
   
   
//    document.addEventListener('click', clickCallback);
  


  







  
 



    






  
  