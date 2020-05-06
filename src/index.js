import { changeView } from "./router/router.js";
//agregoaquí
const init = () => {
  changeView(window.location.hash);
  window.addEventListener("hashchange", () => changeView(window.location.hash));
};

window.addEventListener("load", init);
