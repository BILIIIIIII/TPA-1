const movieEndPoint = "https://api.themoviedb.org/3/discover/movie?api_key=9cc232561d0a5468e44ace27649793fd&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";
const img = "https://image.tmdb.org/t/p/w500";

async function listMovie() {
  let resp = await fetch(movieEndPoint);
  let resultList = await resp.json();
  // console.log(resultList);
  return resultList.results;
}

const filmListContainer = document.querySelector("div.filmList");

function createCard(items) {
  const cardParent = document.createElement("div");
  cardParent.classList.add("card");
  cardParent.innerHTML += `
  <img src="${img}${items.poster_path}" alt="" />
    <div id="detail">
      <div id="kiri">
        <h3 id="judul">${items.title}</h3>
        <p id="date">${items.release_date}</p>
      </div>
      <div id="kanan">
        <div id="rate">${items.vote_average}</div>
      </div>
    </div>
  `;

  filmListContainer.appendChild(cardParent);
}

listMovie().then((movieList) => {
  movieList.forEach((movie) => {
    createCard(movie);
  });
});

function removeAllChild() {
  while (filmListContainer.lastChild) {
    filmListContainer.removeChild(filmListContainer.lastChild);
  }
}
// ------------------------------------------------------
const searchEndPoint = `https://api.themoviedb.org/3/search/movie?api_key=9cc232561d0a5468e44ace27649793fd&query=searchQuery&page=1`;

let searchQuery = document.getElementById("search-bar");

searchQuery.addEventListener("change", (value) => {
  removeAllChild();
  searchMovie(value.target.value);
});

async function searchMovie(keyword) {
  let resp = await fetch(searchEndPoint.replace("searchQuery", keyword));
  let resultSearch = await resp.json();
  console.log(resultSearch);
  resultSearch.results.forEach((data) => {
    createCard(data);
  });
  // console.log(resultSearch);
  return resultSearch.results;
}
