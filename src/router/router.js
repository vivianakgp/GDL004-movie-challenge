import { components } from "../views/indexViews.js";
import homeContent from "./searchController.js";

const changeView = (route) => {
  const container = document.getElementById("container");
  container.innerHTML = "";

  switch (route) {
      case "#/home":
      container.appendChild(components.home())
      homeContent();
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
