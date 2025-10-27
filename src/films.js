// Exercise 1: Get the array of all directors.
const getAllDirectors = (array) => 
  array.map((movie) => movie.director);

// Exercise 2: Get the films of a certain director
const getMoviesFromDirector = (array, director) => 
  array.filter((movie) => movie.director === director);

// Exercise 3: Calculate the average of the films of a given director.
const moviesAverageOfDirector = (array, director) => {
  const moviesFromDirector = getMoviesFromDirector(array, director);
  const total = moviesFromDirector.reduce((total, movie) => total + movie.score, 0);
  
  return Number((total / moviesFromDirector.length).toFixed(2));
}

// Exercise 4:  Alphabetic order by title 
const orderAlphabetically = (array) => {
  const resultArray = [...array];
  const orderFunction = (element1, element2) =>
    element1.title < element2.title ? -1 : element1.title > element2.title ? 1 : 0;

  resultArray.sort(orderFunction)
  resultArray.splice(20);

  return resultArray.map((movie) => movie.title);
}

// Exercise 5: Order by year, ascending
const orderByYear = (array) => {
  const resultArray = [...array];
  const orderFunction = (element1, element2) => {
    const tieBreaker = (title1, title2) => title1 < title2 ? -1 : title1 === title2 ? 0 : 1
    const diff = element1.year - element2.year;

    if (diff < 0) {
      return -1;
    } else if (diff > 0){
      return 1;
    } else {
      return tieBreaker(element1.title, element2.title);
    }
  }

  resultArray.sort(orderFunction);

  return resultArray;
}

// Exercise 6: Calculate the average of the movies in a category
const getMoviesFromCategory = (array, category) => {
  const someFunction = (element) => { return element === category};
  return array.filter((element) => element.genre.some(someFunction));
}

const moviesAverageByCategory = (array, category) => {
  const arrayByCategory = getMoviesFromCategory(array, category);

  if (arrayByCategory && arrayByCategory.length > 0) {
    const total = arrayByCategory.reduce((total, movie) => total + movie.score, 0);
    
    return Number((total / arrayByCategory.length).toFixed(2));
  } else {
    return -1;
  }
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  const transformTimeStringToMinutes = (timeString) => {
    const hoursAndMinutesString = /^(?:(\d+)h)?\s*(?:(\d+)min)?$/i;
    const match = timeString.match(hoursAndMinutesString);

    if (!match) {
      return [ Number.NaN, Number.NaN ];
    } else {
      return [ Number(match[1]), Number(match[2]) ];
    }
  }

  return array.map((movie) => {
    const [hours, minutes] = transformTimeStringToMinutes(movie.duration);
    
    if (isNaN(hours) && isNaN(minutes)) {
      return { ...movie, duration: Number.NaN };
    } else if (isNaN(hours) && !isNaN(minutes)) {
      return { ...movie, duration: minutes };
    } else if (!isNaN(hours) && isNaN(minutes)) {
      return { ...movie, duration: hours * 60 };
    } else {
      return { ...movie, duration: hours * 60 + minutes };
    }
  });
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  const arrayFilmFromYear = array.filter((movie) => movie.year === year);
  
  return [arrayFilmFromYear.sort((movie1, movie2) => movie2.score - movie1.score)[0]];
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */

if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear
  };
}
