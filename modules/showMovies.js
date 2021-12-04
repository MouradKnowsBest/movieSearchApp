import {createMovieDev} from './createMovieDev.js';

export function showMovies(movies){

       movies.forEach((movie) => {
          // console.log(movie)
            const {poster_path, title, vote_average, overview, id} = movie;

            getVideoLink(id).then(function(youtubeLink) {
                createMovieDev(movieEl, youtubeLink, poster_path, title, vote_average, overview);  
                main.appendChild(movieEl);
        })

        main.innerHTML = "";
        const movieEl = document.createElement("div");
        movieEl.classList.add("movie");      

            }, function(error){
                console.log("error movies dev not loaded");
            }); 

}


async function getVideoLink(id){

    const YT_LINK_API_CALL = getYoutubeAPILink(id)

    const response = await fetch(YT_LINK_API_CALL);
    const respData = await response.json().then()
        
            if(respData.videos.results.length != 0)
            {
             const YoutubeURL = "https://www.youtube.com/watch?v=" + respData.videos.results[0].key

             return new Promise ((resolve, reject) => {
                (resolve(YoutubeURL, "error"))
            })
            }
        
}

function getYoutubeAPILink(id){

    const API_URL_YT1 = "https://api.themoviedb.org/3/movie/"
    const API_URL_YT2 = "?api_key=0e201fa7e4708e6b192b79428e836ef9&language=en-US&append_to_response=videos"

    return(API_URL_YT1+id+API_URL_YT2)

}