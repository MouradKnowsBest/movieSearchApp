import {showMovies} from './showMovies.js';

export async function getMovies(url){

    const moviesData = await getData(url);

    sortMoviesByRatings (moviesData);

    showMovies(moviesData);

    }


async function getData(url){
    const resp = await fetch(url);
    const respData = await resp.json();
    return (respData.results)
}    

    
function sortMoviesByRatings(movies) {
    movies.forEach((movie) => {
        movies.sort((a, b) => a.vote_average > b.vote_average ? -1 : 1)
   })

}


