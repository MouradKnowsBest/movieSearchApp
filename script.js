import {sortMoviesByTitle} from "./modules/sortMoviesByTitle.js";
import {API_URL, SEARCH_API} from "./modules/links.js";
import {getMovies}  from "./modules/getMovies.js";


function mainFunction() {

    const main   = document.getElementById("main");
    const form   = document.getElementById("form");
    const search = document.getElementById("search");
    const createButton = document.getElementById('createButton');

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        let searchTerm = search.value;

        createButton.innerHTML = 
        `
        <button id="button"> SORT BY TITLE 
        </button>
        `

        document.getElementById("button").addEventListener("click", function() {
            sortMoviesByTitle(searchTerm);
          });
    
        if (searchTerm) {
            getMovies(SEARCH_API + searchTerm);
            //button.style.visibility = 'visible'
        }
    
        else{
            button.style.visibility = 'hidden'
            console.log('pas de searchTerm')
        }   
    
    });
    
    getMovies(API_URL);

  // <h1> HELLO WHAT MOVIE YOU ANT TO SEARCH ??? </h1>
}


mainFunction()