export default () => {
  const viewHome = `
  <h2 class="text-center">¡Bienvenido a nuestra Home!</h2>
  <button> <a href=#/random> Random Movie </a>  </button>
  <input type="text" id="search">
    <button id="btnSearch">Search</button>
    <div id="contentBox"></div>
  `;
  const divElemt = document.createElement('div');
  divElemt.innerHTML = viewHome;
  return divElemt;
};