document.addEventListener('DOMContentLoaded', () => {
    const selectedMovieId = sessionStorage.getItem('selectedFilmId');
    console.log(selectedMovieId)
    if (selectedMovieId) {
        // fetchAndDisplaySelectedMovie(selectedMovieId);
        fetch(`https://www.omdbapi.com/?apikey=d957911b&i=${selectedMovieId}`)
            .then(response => response.json())
            .then(data => {
            document.getElementById('film').innerHTML = `<h1>${data.Title}</h1>`;
            document.getElementById('affiche').innerHTML = `<img src="${data.Poster}" alt="Affiche de ${data.Title}" id="photo">`;
            document.getElementById('plot').innerHTML = `<p id="plotes">${data.Plot}</p>`;
            document.getElementById('acteurs').innerHTML = `<p id="acteurs">Acteurs : ${data.Actors}</p>`;
            document.getElementById('genre').innerHTML = `<p id="genre">Genres : ${data.Genre}</p>`;
            document.getElementById('notes').innerHTML = `<p id="notes">Notes : ${data.imdbRating}</p>`;
    })
.catch(error => console.error("Erreur lors de la récupération des données :", error));
    } else {
        console.error('Aucun film trouvé');
    }
});

// fetch(`https://www.omdbapi.com/?apikey=d957911b&i=${selectedMovieId}`)
//     .then(response => response.json())
//     .then(data => {
//         document.getElementById('film').innerHTML = `<h1>${data.Title}</h1>`;
//         document.getElementById('affiche').innerHTML = `<img src="${data.Poster}" alt="Affiche de ${data.Title}" id="photo">`;
//         document.getElementById('plot').innerHTML = `<p id="plotes">${data.Plot}</p>`;
//         document.getElementById('acteurs').innerHTML = `<p id="acteurs">Acteurs : ${data.Actors}</p>`;
//         document.getElementById('genre').innerHTML = `<p id="genre">Genres : ${data.Genre}</p>`;
//         document.getElementById('notes').innerHTML = `<p id="notes">Notes : ${data.imdbRating}</p>`;
//     })
// .catch(error => console.error("Erreur lors de la récupération des données :", error));



  