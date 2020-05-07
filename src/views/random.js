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
  <div class="card border-danger mb-3" style="max-width: 20rem;">
  <div class="card-header">Movie app</div>
  <div class="card-body">
    <h4 class="text-danger">${movie.Title}</h4>
    <p class="card-text">${movie.Runtime} | ${movie.Year} | ${movie.Rated}</p>
    <img src="${movie.Poster}"   id='moviePoster' class="card-img-top"/>
    <p class="card-text"><strong>Genre: </strong>${movie.Genre}</p>
    <p class="card-text"><strong>Director: </strong>${movie.Director}</p>
    <p class="card-text"><strong>Stars: </strong>${movie.Actors}</p>
    <a href="#/random" class="btn btn-danger btnWatchMovie">Watch movie</a>
    <button type="button" class="btn btn-outline-secondary btnL">𐠪</button>
  </div>

   
    `;

  const btnRandom = document.createElement("a");
  btnRandom.setAttribute("href", "#/random");
  btnRandom.innerHTML = "Try again";
  const btnHome = document.createElement("a");
  btnHome.setAttribute("href", "#/home");
  btnHome.innerHTML = "ir a home";
  const divElemt = document.createElement("div");
  divElemt.setAttribute("class","divRandom");
  //divElemt.classList.add("position");

  
  divElemt.appendChild(btnHome)
  divElemt.appendChild(btnRandom);
  divElemt.innerHTML = viewHome;
  ;
  return divElemt;
};
/**
 * <div class="card border-danger mb-3" style="max-width: 20rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h4 class="card-title">Danger card title</h4>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
 */
/**
 *  <h1 class="text-center">${movie.Title}</h1>
    <p>${movie.Runtime} | ${movie.Year} | ${movie.Rated} </p>
    <img id='moviePoster' src=${movie.Poster}/>
    <p>${movie.Plot}</p>
    <p><strong>Genre: </strong>${movie.Genre}</p>
    <p><strong>Director: </strong>${movie.Director}</p>
    <p><strong>Stars: </strong>${movie.Actors}</p>
    
 */