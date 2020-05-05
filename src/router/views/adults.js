export default () => {
  const viewHome = `
  <h2 class="text-center">¡Bienvenido a nuestra adults!</h2>`;

  const divElemt = document.createElement('div');
  divElemt.classList.add('position')
  divElemt.innerHTML = viewHome;
  return divElemt;
};


// export default () => {
//   `<div>
//     <h1> Hola soy el adult </h1>
//
//     <button href='#/Kids'>  kids</button>
//     <button href='#/Home'> home </button>
//     </div>`
// }
