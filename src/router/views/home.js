import example from '../../example.js';

export default () => {
  const viewHome = `
  <h2 class="text-center">¡Bienvenido a nuestra Home!</h2>`;

  let movies = ''
   for (let movie of example.results) {
    movies +=  '<img src="' + movie.image + '"> <h1>' + movie.name + '</h1>' + '<h1>' + "Country: " + movie.Country +
    '</h1>' + '<h1>' + " Language: " + movie.Language + '</h1>'
    
  };

    
  const divElemt = document.createElement('div');
  divElemt.innerHTML = movies;
  return divElemt;
};


