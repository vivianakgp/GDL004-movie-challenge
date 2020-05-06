import { components } from "../views/indexViews.js";

const changeView = (route) => {
  const container = document.getElementById("container");
  container.innerHTML = "";

  switch (route) {
      case "#/home":
      container.appendChild(components.home())
      break;
      case "#/random":
      container.appendChild(components.random())
      break;
    default:container.appendChild(components.start())
      break;
  }
  return null;
};
export { changeView };
