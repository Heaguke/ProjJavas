const list2024 = [
    "tt16426418",
    "tt14539740",
    "tt6263850",
    "tt26753003",
    "tt4978420",
    "tt21692408",
    "tt17279496",
    "tt26658104",
    "tt22022452"
];

const tendance = [
    "tt1160419",
    "tt0167260",
    "tt1677720"
];

sessionStorage.setItem("acc",0)

function displayFilms(idFilm, imgId, titleId) {
    fetch(`https://www.omdbapi.com/?apikey=d957911b&i=${idFilm}`)
        .then(response => response.json())
        .then(data => {
            const filmElement = document.createElement('div');
            filmElement.classList.add('film');
            const filmImage = document.createElement('img');
            filmImage.src = data.Poster;
            filmImage.alt = data.Title;
            const filmTitle = document.createElement('h3');
            filmTitle.textContent = data.Title;
            filmElement.appendChild(filmImage);
            filmElement.appendChild(filmTitle);
            document.getElementById('filmsContainer').appendChild(filmElement);
        })
        .catch(err => console.error('Erreur API:', err));
}

function loadMoreFilms() {
    let x = sessionStorage.getItem("acc")
    for (let i = 0; i < 3 && x < list2024.length; i++) {
        displayFilms(list2024[x], 'imagefilm', 'titrefilm');
        x++;
    }
    sessionStorage.setItem("acc",x)

    if (acc >= list2024.length) {
        document.getElementById('Plus').disabled = true;
    }
}


for (let i = 0; i < 3 && i < tendance.length; i++) {
    displayFilms(tendance[i], 'imagefilm', 'titrefilm');
}


document.getElementById('Plus').addEventListener('click', loadMoreFilms);