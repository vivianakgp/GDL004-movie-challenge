export default () => {
  const viewHome = `
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Movie App</a>
  <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="navbar-collapse collapse" id="navbarColor02" style="">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#/random">Random <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#/home"></a>
      </li>
    </ul>
   
  </div>
</nav>
<form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="text" placeholder="Search" id="search">
      <button class="btn btn-secondary my-2 my-sm-0" type="submit" id="btnSearch">Search</button> 
    </form>
    <div id="contentBox"></div>
  
  `;
  const divElemt = document.createElement('div');
  divElemt.innerHTML = viewHome;
  return divElemt;
};
/*
const viewHome = `
  <h2 class="text-center">¡Bienvenido a nuestra Home!</h2>
  <button> <a href=#/random> Random Movie </a>  </button>
  <input type="text" id="search">
    <button id="btnSearch">Search</button>
    <div id="contentBox"></div>
  `;
  const divElemt = document.createElement('div');
  divElemt.innerHTML = viewHome;
  return divElemt
*/
