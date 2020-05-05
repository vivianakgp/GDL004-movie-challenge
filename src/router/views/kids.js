export default () => {
  const viewHome = `
  <h2 class="text-center">¡Bienvenido a nuestra Kids</h2>`;

  const btnHome = document.createElement('a')
  btnHome.setAttribute('href','#/Home')
  btnHome.innerHTML= 'ir a Home'
  const btnAdult = document.createElement('a')
  btnAdult.setAttribute('href','#/Adult')
  btnAdult.innerHTML= 'ir a Adult'
  const divElemt = document.createElement('div');
  divElemt.classList.add('position')
  
  
  divElemt.innerHTML = viewHome;
  divElemt.appendChild(btnHome)
  divElemt.appendChild(btnAdult)
  return divElemt;
};