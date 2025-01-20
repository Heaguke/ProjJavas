const list2024 = [
    "tt16426418",
    "tt14539740",
    "tt6263850",
    "tt26753003",
    "tt4978420",
    "tt21692408"
];

const tendance = [
    
];

let currentIndex = 0;

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
    for (let i = 0; i < 2 && currentIndex < list2024.length; i++) {
        displayFilms(list2024[currentIndex], 'imagefilm', 'titrefilm');
        currentIndex++;
    }


    if (currentIndex >= list2024.length) {
        document.getElementById('Plus').disabled = true;
    }
}


for (let i = 0; i < 3 && i < list2024.length; i++) {
    displayFilms(list2024[i], 'imagefilm', 'titrefilm');
    currentIndex++;
}


document.getElementById('Plus').addEventListener('click', loadMoreFilms);