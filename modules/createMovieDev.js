import {IMG_PATH} from './links.js';

export async function createMovieDev(movieEl, youtubeLink, poster_path, title, vote_average, overview, movieBudget){

    var imgPath = IMG_PATH + poster_path 

    var lastFour = imgPath.substr(imgPath.length - 4); // => last 4 letters
 
    if (lastFour == "null") { // error handling
        createMoviesDivWithError(movieEl, youtubeLink, poster_path, title, vote_average, overview, movieBudget)
    }

    else {
        createMoviesDiv(movieEl, youtubeLink, poster_path, title, vote_average, overview, movieBudget)
   }
 
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

function createMoviesDivWithError(movieEl, youtubeLink, vote_average, overview, movieBudget){
    movieEl.classList.add("movie");

    movieEl.innerHTML = `
    <img
        src=".//images//error_img.jpg"
        alt=""
    />

    <div class="movie-info">
        <h3> ERROR : Sorry Image not found </h3>
        <span class="${getClassByRate(vote_average)}">
        ${vote_average}</span>
    </div>
    <div class="overview">
    <a href=${youtubeLink} target ="_blank"> 
        <h3 style="text-align:center; color:#373b69 ;font-size: 28px ;font-weight: bolder; border: 1px solid #373b69">
            TRAILER 
        </h3>
    </a>
      <h3>Overview:</h3>
      ${overview}
      <h3>Budjet:</h3> <strong class="budget"> ${formatNumber(movieBudget)} $ </strong>
  </div>

    `;

    main.appendChild(movieEl);
}

function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

function createMoviesDiv(movieEl, youtubeLink, poster_path, title, vote_average, overview, movieBudget) {
    movieEl.innerHTML = `

    <img
        src="${IMG_PATH + poster_path}"
        alt="${title}"
    />
    <div class="movie-info">
        <h3>${title} </h3> 
        <span class="${getClassByRate(vote_average)}">
        ${vote_average}</span>
    </div>
    <div class="overview">
      <a href=${youtubeLink} target ="_blank"> 
          <h3 style="text-align:center; color:#373b69 ;font-size: 28px ;font-weight: bolder; border: 1px solid #373b69">
              TRAILER 
          </h3>
      </a>

        <h3>Overview:</h3>
        ${overview}
        <h3>Budjet:</h3> <strong class="budget"> ${formatNumber(movieBudget)} $ </strong>
        </div>
    `;
}