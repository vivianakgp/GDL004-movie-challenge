// antes era homecontent.js
export default () => {

    let randomWords = ['cat', 'dog', 'soccer', 'black', 'spy', 'run', 'play', 'friend', 'war', 'christmas', 'winter', 'summer', 'heroes', 'rabbit', 'stranger', 'city'];
    let item = randomWords[Math.floor(Math.random() * randomWords.length)];
    showMovies(item);
  
    function showMovies(searchWord) {
        searchWord = searchWord.trim();
        fetch(`http://www.omdbapi.com/?s=${searchWord}&apikey=3b40ef2f`)
            .then(response => response.json())
            .then(data => {
                contentBox.innerHTML = ''
                console.log(data);
                if (data.Error) {
                    contentBox.innerHTML += `<h1>Error: ${data.Error}</h1>`;
                    return;
                }
                let content = '';
                for (let movie of data.Search) {
                    let templateMovie = `
                        <div style="border: 1px solid black; border-radius: 4px; width: 24%; margin: 5px; padding: 3px;">
                        <img src="${movie.Poster}">
                        <h1>Titulo: ${movie.Title}</h1>
                        <h1>Año: ${movie.Year}</h1>
                        </div>`;
                        content += templateMovie;
                }
                contentBox.innerHTML += content;
                });
              }
    let bntSearch = document.getElementById('btnSearch');
    btnSearch.addEventListener('click', function() {
        let inputText = document.getElementById('search').value;
        showMovies(inputText);
    });
};