export default () => {
  const viewStart = document.createElement("div");
  viewStart.innerHTML = `
    <div id='startContainer'>
      <a href='#/home'>x</a>
      <h1 class="text-center">CAN'T DECIDE WHAT TO WATCH?</h1>
      <a id='random' href='#/random'>Pick a movie for me!</a>
    </div>
    `;

  return viewStart;
};
