import {showMovies} from './showMovies.js';
import {SEARCH_API} from './links.js';


export async function sortMoviesByTitle(searchTerm){

    console.log('the search temr is : ', searchTerm)

    const moviesData = await getData(searchTerm)

    sortByTitle(moviesData);
    
    showMovies(moviesData);
}

function sortByTitle(movies) {
    movies.forEach((movie) => {
        movies.sort((a, b) => a.title > b.title ? 1 : -1)
   })

}

async function getData(searchTerm){
    const resp = await fetch(SEARCH_API + searchTerm);
    const respData = await resp.json();

    return respData.results
}
