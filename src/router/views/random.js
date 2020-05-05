import { getData } from "../../data.js";

let movie = [];

getData().then((data) => {
  movie = data;
  console.log(movie);
});

let image = movie.Poster;

console.log(document.getElementById("moviePoster"));
/*
if (image !== "N/A") {
  document.getElementById("moviePoster").setAttribute("src", image);
}*/

export default () => {
  const viewHome = `
    <h1 class="text-center">${movie.Title}</h1>
    <p>${movie.Runtime} | ${movie.Year} | ${movie.Rated} </p>
    <img id='moviePoster' src=${movie.Poster}/>
    <p>${movie.Plot}</p>
    <p><strong>Genre: </strong>${movie.Genre}</p>
    <p><strong>Director: </strong>${movie.Director}</p>
    <p><strong>Stars: </strong>${movie.Actors}</p>
    `;

  const btnRandom = document.createElement("a");
  btnRandom.setAttribute("href", "#/random");
  btnRandom.innerHTML = "Try again";
  const btnHome = document.createElement("a");
  btnHome.setAttribute("href", "#/home");
  btnHome.innerHTML = "ir a home";
  const divElemt = document.createElement("div");
  divElemt.classList.add("position");

  divElemt.innerHTML = viewHome;
  divElemt.appendChild(btnRandom);
  divElemt.appendChild(btnHome);
  return divElemt;
};
