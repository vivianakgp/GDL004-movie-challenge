export default () => {
  const viewHome = `
  <h2 class="text-center">¡Bienvenido a nuestra página!</h2>`;

  const divElemt = document.createElement('div');
  divElemt.classList.add('position')
  divElemt.innerHTML = viewHome;
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
