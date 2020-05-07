export default () => {
  let movieArray = [
    "cat",
    "dog",
    "soccer",
    "black",
    "spy",
    "run",
    "play",
    "friend",
    "war",
    "christmas",
    "winter",
    "summer",
    "heroes",
    "rabbit",
    "stranger",
    "city",
    "captain",
    "soldier",
    "new",
    "old",
    "the",
  ];
  let randomNumber = Math.floor(Math.random() * movieArray.length - 1) + 1;
  let randomMovie = movieArray[randomNumber];

  const random = async () => {
    const response = await fetch(
      "http://www.omdbapi.com/?apikey=d033b518&t=" + encodeURI(randomMovie)
    );
    const movie = await response.json();
    return movie;
  };

  random().then((movie) => {
    let randomTemplate = `
    <h1 class="text-center">${movie.Title}</h1>
    <p>${movie.Runtime} | ${movie.Year} | ${movie.Rated} </p>
    <img id='moviePoster' src=${movie.Poster}/>
    <p>${movie.Plot}</p>
    <p><strong>Genre: </strong>${movie.Genre}</p>
    <p><strong>Director: </strong>${movie.Director}</p>
    <p><strong>Stars: </strong>${movie.Actors}</p>`;
    movieCard.innerHTML = randomTemplate;

    //Dynamic poster rendering
    /*let poster = movie.Poster;

    if (poster !== "N/A") {
      innerHTML.querySelector("#moviePoster").setAttribute("src", poster);
    }*/
  });
};
