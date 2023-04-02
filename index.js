fetch('http://localhost:3000/films/1')
  .then(response => response.json())
  .then(data => {
    const poster = document.createElement('img');
    poster.src = data.poster;
    document.body.appendChild(poster);
    const title = document.createElement('h1');
    title.textContent = data.title;
    document.body.appendChild(title);

    const runtime = document.createElement('p');
    runtime.textContent = `Runtime: ${data.runtime} minutes`;
    document.body.appendChild(runtime);

    const showtime = document.createElement('p');
    showtime.textContent = `Showtime: ${data.showtime}`;
    document.body.appendChild(showtime);

    const availableTickets = data.capacity - data.tickets_sold;
    const tickets = document.createElement('p');
    tickets.textContent = `Available Tickets: ${availableTickets}`;
    document.body.appendChild(tickets);
  })

 const filmsList = document.querySelector("#films");

 fetch("http://localhost:3000/films")
  .then((response) => response.json())
  .then((films) => {
    films.forEach((film) => {
      const filmItem = document.createElement("li");
      filmItem.textContent = film.title;
      filmItem.classList.add("film", "item");
      filmItem.addEventListener("click", () => {
     const poster = document.createElement('img');
     poster.src = data.poster;
     document.body.appendChild(poster);
     const title = document.createElement('h1');
     title.textContent = data.title;
     document.body.appendChild(title);

     const runtime = document.createElement('p');
     runtime.textContent = `Runtime: ${data.runtime} minutes`;
     document.body.appendChild(runtime);

     const showtime = document.createElement('p');
     showtime.textContent = `Showtime: ${data.showtime}`;
     document.body.appendChild(showtime);

     const availableTickets = data.capacity - data.tickets_sold;
     const tickets = document.createElement('p');
     tickets.textContent = `Available Tickets: ${availableTickets}`;
      document.body.appendChild(tickets);
        console.log(film);
      });
      filmsList.appendChild(filmItem);
    });
  });


const buyButtons = document.querySelectorAll('.buy-button');


buyButtons.forEach(button => {
  button.addEventListener('click', () => {
    const movieId = button.dataset.movieId;
    const ticketCount = document.querySelector(`#movie-${movieId}-ticket-count`);
    let currentCount = parseInt(ticketCount.textContent);
   if (currentCount > 0) {
      currentCount--;
      ticketCount.textContent = currentCount;
    }
  });
});


  
 



    






  
  