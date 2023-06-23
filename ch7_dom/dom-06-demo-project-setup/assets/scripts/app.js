const startAddMovieButton = document.querySelector("header button");
//document.querySelector("header").lasElementChild
const addMovieModal = document.getElementById("add-modal");
const backdrop = document.getElementById("backdrop");
const cancelAddMovieButton = addMovieModal.querySelector(".btn--passive");
const confirmAddMovieButton = addMovieModal.querySelector(".btn--success");
const userInputs = addMovieModal.querySelectorAll("input");
const entryTextSection = document.getElementById("entry-text");

const movies = [];

function updateUI() {
  if (movies.length === 0) {
    entryTextSection.style.display = "block";
  } else {
    entryTextSection.style.display = "none";
  }
}
function deleteMovieHandler(movieId) {
  let movieIndex = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex, 1);
  const listRoot = document.getElementById("movie-list");
  listRoot.children[movieIndex].remove();
}

const renderNewMovieElement = (id, title, image, rating) => {
  const newmovieElement = document.createElement("li");
  newmovieElement.className = "movie-element";
  newmovieElement.innerHTML = `
    <div class="movie-element__image">
    <img src="${image}" alt="${title}">
    </div>
    <div class="movie-element__info>
    <h2>${title}</h2>
    <p>${rating}/s star</p>
    </div>
`;
  newmovieElement.addEventListener("click", deleteMovieHandler.bind(null, id));
  const listRoot = document.getElementById("movie-list");
  listRoot.append(newmovieElement);
};
function toggleMovieModal() {
  addMovieModal.classList.toggle("visible");
  toggleBackdrop();
}

function toggleBackdrop() {
  backdrop.classList.toggle("visible");
}

function backdropClickHandler() {
  toggleMovieModal();
}
function clearMovieInput() {
  for (const userInput of userInputs) {
    userInput.value = "";
  }
}
function addMovieHandler() {
  const title = userInputs[0].value;
  const image = userInputs[1].value;
  const rating = userInputs[2].value;
  const newMovie = {
    id: Math.random().toString(),
    title,
    image,
    rating,
  };
  movies.push(newMovie);
  clearMovieInput();
  renderNewMovieElement(
    newMovie.id,
    newMovie.title,
    newMovie.image,
    newMovie.rating
  );
  updateUI();
  toggleMovieModal();
}

startAddMovieButton.addEventListener("click", toggleMovieModal);
backdrop.addEventListener("click", backdropClickHandler);
cancelAddMovieButton.addEventListener("click", toggleMovieModal);
confirmAddMovieButton.addEventListener("click", addMovieHandler);
