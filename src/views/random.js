export default () => {
  const viewRandom = document.createElement("div");
  viewRandom.innerHTML = `
    <div id='randomContainer'>
      <div id='movieCard'></div>
      <button><a href="https://www.netflix.com/mx-en/">Watch</a>
      </button>
      <button id='retry'><img class="icon" src='../img/reload.png' alt='Try again'/></button>
    </div>
    `;

  //Retry function
  viewRandom.querySelector("#retry").addEventListener("click", (e) => {
    e.preventDefault();
    window.location.reload();
  });

  return viewRandom;
};
