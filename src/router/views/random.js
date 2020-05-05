export default () => {
    const viewHome = `
    <h1 class="text-center">random template</h1>
    `;
  
    const btnRandom = document.createElement('a')
    btnRandom.setAttribute('href','#/random')
    btnRandom.innerHTML= 'Give me something!'
    const btnHome = document.createElement('a')
    btnHome.setAttribute('href','#/home')
    btnHome.innerHTML= 'ir a home'
    const divElemt = document.createElement('div');
    divElemt.classList.add('position')
    
    
    divElemt.innerHTML = viewHome;
    divElemt.appendChild(btnRandom)
    divElemt.appendChild(btnHome)
    return divElemt;
  };