export default () => {
  const viewHome = `
  <h2 class="text-center">¡Bienvenido a nuestra Home</h2>`;

  const btnKids = document.createElement('a')
  btnKids.setAttribute('href','#/Kids')
  btnKids.innerHTML= 'ir a kids'
  const btnAdult = document.createElement('a')
  btnAdult.setAttribute('href','#/Adult')
  btnAdult.innerHTML= 'ir a Adult'
  const divElemt = document.createElement('div');
  divElemt.classList.add('position')
  
  
  divElemt.innerHTML = viewHome;
  divElemt.appendChild(btnKids)
  divElemt.appendChild(btnAdult)
  return divElemt;
};

// export default () => {
//   `<div>
//     <h1> Hola soy el home </h1>
//
//     <button href='#/Kids'>  </button>
//     <button href='#/Adultsids'>  </button>
//     </div>`
// }
