export default () => {
  const viewHome = `
  <h2 class="text-center">¡Bienvenido a nuestra kids!</h2>`;

  const divElemt = document.createElement('div');
  divElemt.classList.add('position')
  divElemt.innerHTML = viewHome;
  return divElemt;
};

// export default () => {
//   `<div>
//     <h1> Soy el kids </h1>
//
//     <button href='#/Kids'> kids  </button>
//     <button href='#/Home'> home </button>
//     </div>`
// }
