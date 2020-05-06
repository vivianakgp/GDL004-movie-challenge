export default () => {
  const viewHome = `
    <div>
    
    <h1 class="text-center">CAN'T DECIDE WHAT TO WATCH?</h1>
    
    </div>
    `;

  const btnRandom = document.createElement("a");
  btnRandom.setAttribute("href", "#/random");
  btnRandom.innerHTML = "Pick a movie for me!";
  const btnHome = document.createElement("a");
  btnHome.setAttribute("href", "#/home");
  btnHome.innerHTML = "&times;";
  const divElemt = document.createElement("div");
  divElemt.classList.add("position");

  const br = document.createElement('br')
  divElemt.innerHTML = viewHome;
  divElemt.appendChild(btnRandom);
  divElemt.appendChild(br)
  divElemt.appendChild(btnHome);
  return divElemt;
};
