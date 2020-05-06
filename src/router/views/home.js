export default () => {
  const viewHome = `
  <h2 class="text-center">¡Bienvenido a nuestra Home!</h2>
  <input type="text" id="search">
    <button id="btnSearch">Search</button>
    <div id="contentBox"></div>
  `;
  const divElemt = document.createElement('div');
  divElemt.innerHTML = viewHome;
  return divElemt;
};
              