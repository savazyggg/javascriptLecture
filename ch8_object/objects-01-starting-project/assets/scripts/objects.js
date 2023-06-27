const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");

const movies = [];
const renderMovies = (filter = "") => {
  const movieList = document.getElementById("movie-list");

  if (movies.length === 0) {
    movieList.classList.remove("visible");
    return;
  } else {
    movieList.classList.add("visible");
  }
  movieList.innerHTML = "";

  const filteredMovie = !filter
    ? movies
    : movies.filter((movie) => movie.info.title.includes(filter));
  filteredMovie.forEach((movie) => {
    const movieEl = document.createElement("li");

    const { info, ...otherProps } = movie;
    console.log(otherProps);
    //const { title: movieTitle } = info;
    const { getFormattedTitle } = movie;
    //getFormattedTitle = getFormattedTitle.bind(movie);
    // this는 함수를 실행시키게한 주체를 참고하여 movie가 앞에 있으면 movie에서 참조하지만,
    //아무것도 없다면 전역 실행 컨텍스트를 참조하게 됨.(non-strict일 경우 window객체)
    //stric모드라면 undefind로 값 도출 -> 참조할 수 있는 주체가 없음
    //그래서 앞에 movie.getFormattedTitle() 로 참조할 수 있도록 해주던가 bind를 통해 참조를 묶을 수 있음.
    //bind는 나중에 실행할 함수를 미리 구성하는 데에는 유용
    let text = getFormattedTitle.call(movie) + " - ";
    //여기서는 함수를 바로 실행할 거라서 bind대신 call이 유용함

    for (const key in info) {
      if (key !== "title") {
        text = text + `${key}: ${info[key]}`; //다이나믹 프로포티 엑세스 로직
      }
    }
    movieEl.textContent = text;
    movieList.append(movieEl);
  });
};

const addMovieHandler = () => {
  const title = document.getElementById("title").value;
  const extraName = document.getElementById("extra-name").value;
  const extraValue = document.getElementById("extra-value").value;
  if (title.trim() === "" || extraName.trim === "" || extraValue === "") {
    return;
  }
  const newMovie = {
    info: {
      title,
      [extraName]: extraValue,
    },
    id: Math.random().toString(),
    getFormattedTitle: function () {
      return this.info.title.toUpperCase(); //this가 없다면 함수를 실행시키게된 항목인 newMovie안을 참조하지 않고 그 밖의 값을 참조하게 되고 이상하게 동작할 수 있다.
    },
  };
  movies.push(newMovie);
  console.log(newMovie);
  renderMovies();
};

const searchMovieHandler = () => {
  const filterTerm = document.getElementById("filter-title").value;
  renderMovies(filterTerm);
};

addMovieBtn.addEventListener("click", addMovieHandler);
searchBtn.addEventListener("click", searchMovieHandler);
