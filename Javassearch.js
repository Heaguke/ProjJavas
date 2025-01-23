document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('site-search');
    const searchButton = document.querySelector('.button');
    const boutonChargerPlus = document.getElementById("PageSuivante");
    let pageActuelle = 1;
    let currentSearch = ""; 
    boutonChargerPlus.style.display = "none";
    searchButton.addEventListener('click', () => {
        const nameFilm = searchInput.value.trim(); 
        if (nameFilm) {
            document.getElementById('filmsContainer').innerHTML = ''; 
            pageActuelle = 1; 
            currentSearch = nameFilm; 
            displayFilms(nameFilm, pageActuelle); 
        }
    });

    boutonChargerPlus.addEventListener("click", () => {
        pageActuelle++;
        displayFilms(currentSearch, pageActuelle); 
    });
});

function displayFilms(nameFilm, page) {
    fetch(`https://www.omdbapi.com/?apikey=d957911b&s=${nameFilm}&type=movie&page=${page}`)
        .then(response => response.json())
        .then(data => {
            const search = data.Search; 
            if (search && search.length > 0) { 
                document.getElementById("PageSuivante").style.display = "block";
                search.forEach(element => {
                    const filmElement = document.createElement('div');
                    filmElement.classList.add('film');
                    let filmImage;
                    if (element.Poster !== "N/A") {
                        filmImage = document.createElement('img');
                        filmImage.src = element.Poster;
                        filmImage.alt = element.Title;
                    } else {
                        filmImage = document.createElement('div');
                        filmImage.classList.add('placeholder');
                    }
                    filmImage.addEventListener('click', () => {
                        sessionStorage.setItem('selectedFilmId', element.imdbID); 
                        window.location.href = 'movie.html'; 
                    });
                    const filmTitle = document.createElement('h3');
                    filmTitle.textContent = element.Title;
                    filmElement.appendChild(filmImage);
                    filmElement.appendChild(filmTitle);
                    document.getElementById('filmsContainer').appendChild(filmElement);
                });
            } else {
                document.getElementById("PageSuivante").style.display = "none";
            }
        })
}
