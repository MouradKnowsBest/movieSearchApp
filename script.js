const APIURL="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0e201fa7e4708e6b192b79428e836ef9&page=1"
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const main   = document.getElementById("main");
const form   = document.getElementById("form");
const search = document.getElementById("search");
const button = document.getElementById('button');

async function main(url){
    const resp = await fetch(url);
    const respData = await resp.json();

    //button.style.visibility = 'hidden'

    sortMoviesByRatings (respData.results)
    showMovies(respData.results);

    }

async function getMovies2(searchTerm){

        const resp = await fetch(SEARCHAPI + searchTerm);
        const respData = await resp.json();
        sortByTitle(respData.results);
        showMovies(respData.results);
}
    

function sortMoviesByRatings(movies) {
    movies.forEach((movie) => {
        movies.sort((a, b) => a.vote_average > b.vote_average ? -1 : 1)
   })

}

function sortByTitle(movies) {
    movies.forEach((movie) => {
        movies.sort((a, b) => a.title > b.title ? 1 : -1)
   })

}

function showMovies(movies){
        main.innerHTML = "";

       // sortMovies = (movies, vote_average) 

       movies.forEach((movie) => {
          // console.log(movie)
            const {release_date, poster_path, title, vote_average, overview} = movie;
            const movieEl = document.createElement("div");

         //  console.log(IMGPATH + poster_path)
           var imgPath = IMGPATH + poster_path

           var lastFour = imgPath.substr(imgPath.length - 4); // => last 4 letters
           
           if (lastFour == "null") {

            movieEl.classList.add("movie");

            movieEl.innerHTML = `
            <img
                src="https://www.electiondataservices.com/wp-content/uploads/2014/10/sorry-image-not-available.jpg"
                alt=""
            />
            <div class="movie-info">
                <h2> ERROR : Sorry Image not found </h3>
                <span class="${getClassByRate(vote_average)}">
                ${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview:</h3>
                ${overview}
            </div>
            `;

            main.appendChild(movieEl);
           }




            else {
                movieEl.classList.add("movie");                

                movieEl.innerHTML = `
                <img
                    src="${IMGPATH + poster_path}"
                    alt="${title}"
                />
                <div class="movie-info">
                    <h3>${title} </h3> 
                    <span class="${getClassByRate(vote_average)}">
                    ${vote_average}</span>
                </div>
                <div class="overview">
                    <h3>Overview:</h3>
                    ${overview}
                </div>
                `;

                main.appendChild(movieEl);
            //  console.log(main)

            }


        });
}

function getClassByRate(vote) {
    if (vote >= 8) {
        return "green";
    } else if (vote >= 5) {
        return "orange";
    } else {
        return "red";
    }
}


form.addEventListener("submit", (e) => {
    e.preventDefault();
    let searchTerm = search.value;
    document.getElementById("button").addEventListener("click", function() {
        getMovies2(searchTerm);

      });

    if (searchTerm) {
        getMovies(SEARCHAPI + searchTerm);
        //button.style.visibility = 'visible'
    }

    else{
        button.style.visibility = 'hidden'
    }



});

main(APIURL);
