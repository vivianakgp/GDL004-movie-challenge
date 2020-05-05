import {
  components
} from './views/indexViews.js'

const changeView = (route) => {
  const container = document.getElementById('container')
  container.innerHTML = '';

  switch (route) {

    // case "#/Home":
    //   container.appendChild(components.home())
    //   break;
    case "#/Adult":
      container.appendChild(components.adult())
      break;
    case "#/Kids":
      container.appendChild(components.kids())
      break;
      case "#/home":
      container.appendChild(components.home())
      break;
      case "#/random":
      container.appendChild(components.random())
      break;
    default:container.appendChild(components.start())
      break;

  }
  return null
}
export {
  changeView
}
