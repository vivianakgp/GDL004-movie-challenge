export default () => {
  const viewHome = `
  <h2 class="text-center">¡Bienvenido a nuestra Adult</h2>`;

  const btnKids = document.createElement('a')
  btnKids.setAttribute('href','#/Kids')
  btnKids.innerHTML= 'ir a kids'
  const btnHome = document.createElement('a')
  btnHome.setAttribute('href','#/Home')
  btnHome.innerHTML= 'ir a Home'
  const divElemt = document.createElement('div');
  divElemt.classList.add('position')
  
  
  divElemt.innerHTML = viewHome;
  divElemt.appendChild(btnKids)
  divElemt.appendChild(btnHome)
  return divElemt;
};