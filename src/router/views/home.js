/* import { example } from '../../src/example.js'; */

export default () => {
  const viewHome = `
  <h2 class="text-center">¡Bienvenido a nuestra Home!</h2>`;


  
  const divElemt = document.createElement('div');
  divElemt.innerHTML = viewHome;
  return divElemt;
};

/* for (let movie of example) {
  const template = document.createElement('div');
  template.classList.add('Movie');
  template.innerHTML = '<img src="' + movie.img + '"> <h1>' + movie.name + '</h1>' + '<h1>' + "Name: " + movie.contry +
  '</h1>' + '<h1>' + " Type: " + movie.languaje + '</h1>'
  
  document.getElementById('container').appendChild(template); 
 
};
*/
