const filmId = sessionStorage.getItem('selectedFilmId');

if (filmId) {
    fetch(`https://www.omdbapi.com/?apikey=d957911b&i=${filmId}`)
        .then(response => response.json())
        .then(data => {
            const filmDetailsContainer = document.getElementById('filmDetails');
            const filmTitle = document.createElement('h1');
            filmTitle.textContent = data.Title;
            const filmPoster = document.createElement('img');
            filmPoster.src = data.Poster;
            filmPoster.alt = data.Title;
            const filmPlot = document.createElement('p');
            filmPlot.textContent = data.Plot;
            filmDetailsContainer.appendChild(filmTitle);
            filmDetailsContainer.appendChild(filmPoster);
            filmDetailsContainer.appendChild(filmPlot);
        })
        .catch(err => console.error('Erreur API:', err));
} else {
    console.error('Aucun ID de film trouvé dans le sessionStorage');
}