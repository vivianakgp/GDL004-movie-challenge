import {
  components
} from './views/indexViews'

const changeView = (route) => {
  const container = document.getElementById('container')
  container.innerHTML = ''

  switch (route) {

    case "#/Home":
      container.appendChild(components.home())
      break;
    case "#/Adult":
      container.appendChild(components.adult())
      break;
    case "#/Kids":
      container.appendChild(components.kids())
      break;
    default:"/Home"
      container.appendChild(components.home())
      break;

  }
  return null
}
export {
  changeView
}
