import {sortMoviesByTitle} from "./modules/sortMoviesByTitle.js";
import {API_URL, SEARCH_API} from "./modules/links.js";
import {getMovies}  from "./modules/getMovies.js";


function main() {

    const form   = document.getElementById("form");

    form.addEventListener("submit", (event) => {

        const searchTerm = gerUsersSearch(event)

        giveUserAnswer(searchTerm)
    
    });
    
    getMovies(API_URL);

  // <h1> HELLO WHAT MOVIE YOU ANT TO SEARCH ??? </h1>
}


function gerUsersSearch(e){

    e.preventDefault();

    let searchTerm = search.value;

    createButton.innerHTML = 
    `
    <button id="button"> SORT BY TITLE 
    </button>
    `

    return(searchTerm)
}

function giveUserAnswer(searchTerm){

    document.getElementById("button").addEventListener("click", function() {
        sortMoviesByTitle(searchTerm);
      });

    if (searchTerm) {
        getMovies(SEARCH_API + searchTerm);
    }


}

main()