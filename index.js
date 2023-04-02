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
  .catch(error => console.error(error));



const showMovies = ()=> {
    fetch (` http://localhost:3000/films`)
    .then(response => response.json())
    .then(data => {
        console.log(title);
        console.log(poster);
        console.log(description);
        console.log(showtime);
        console.log(runtime)
    })
}


  
  