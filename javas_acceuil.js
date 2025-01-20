function TrouverFilms(idFilms){
    fetch(`https://www.omdbapi.com/?apikey=586caa23&i=${(idFilms)}`)
}
