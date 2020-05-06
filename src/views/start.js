export default () => {
  const viewHome = `
    <h1 class="text-center">CAN'T DECIDE WHAT TO WATCH?</h1>
    <button>Pick a movie for me!</button>
    `;

  const btnKids = document.createElement("a");
  btnKids.setAttribute("href", "#/random");
  btnKids.innerHTML = "ir a random";
  const btnAdult = document.createElement("a");
  btnAdult.setAttribute("href", "#/home");
  btnAdult.innerHTML = "ir a home";
  const divElemt = document.createElement("div");
  divElemt.classList.add("position");

  divElemt.innerHTML = viewHome;
  divElemt.appendChild(btnKids);
  divElemt.appendChild(btnAdult);
  return divElemt;
};
