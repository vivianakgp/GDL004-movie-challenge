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
                if (data.Error) {
                    contentBox.innerHTML += ` <p class="lead">Error: ${data.Error}</p>`;
                    return;
                }
                let content = '';
                for (let movie of data.Search) {
                    let templateMovie = `
                    <div class="card border-dark mb-3" id="cardsSearch" style="max-width: 20rem;">
                        <div class="card-body">
                        <h4 class="card-title">${movie.Title}</h4>
                        <p class="card-text">${movie.Year}</p>
                        <img src="${movie.Poster}" class="card-img-top">
                        <button type="button" id="btnWatch" class="btn btn-danger ">wach movie</button>
                        <button type="button" id="btnHome" class="btn btn-outline-secondary">𐠪</button>
                    </div>
                        `;
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

