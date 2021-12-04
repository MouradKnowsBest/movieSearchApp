import {showMovies} from './showMovies.js';
import {SEARCH_API} from './links.js';


export async function sortMoviesByTitle(searchTerm){

    console.log('the search temr is : ', searchTerm)

    const resp = await fetch(SEARCH_API + searchTerm);
    const respData = await resp.json();
    sortByTitle(respData.results);
    showMovies(respData.results);
}

function sortByTitle(movies) {
    movies.forEach((movie) => {
        movies.sort((a, b) => a.title > b.title ? 1 : -1)
   })

}


