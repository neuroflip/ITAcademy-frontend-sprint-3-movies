import { describe, it, expect } from 'vitest';
import { getAllDirectors, getMoviesFromDirector, moviesAverageOfDirector, orderAlphabetically,
  orderByYear, moviesAverageByCategory, hoursToMinutes, bestFilmOfYear } from '../src/films';

import movies from '../src/data.js';
import ex1MoviesTestData from './data/ex1MoviesTestData.js';
import ex1ResultMoviesTotalDirectors from './data/ex1MoviesTestData.result.js';
import ex2MoviesFromDirector from './data/ex2MoviesFromDirector.js';
import ex2ResultMoviesFromDirector from './data/ex2MoviesFromDirector.result.js';
import ex2ResultMoviesTotalFromDirector from './data/ex2MoviesTotalFromDirector.result.js';
import ex3MoviesAverageFromDirector from './data/ex3MoviesAverageFromDirector.js'
import ex4AlphabeticalOrder from './data/ex4AlphabeticalOrder.js';
import ex4ResultAlphabeticalOrder from './data/ex4AlphabeticalOrder.result.js';
import ex4AlphabeticalOrderTop20 from './data/ex4AlphabeticalOrderTop20.js';
import ex4ResultAlphabeticalOrderTop20 from './data/ex4AlphabeticalOrderTop20.result.js';
import ex5OrderByYear from './data/ex5OrderByYear.js';
import ex5ResultOrderByYear from './data/ex5OrderByYear.result.js';
import ex8BestFiltOfYear from './data/ex8BestFiltOfYear.js';
import ex8ResultBestFiltOfYear from './data/ex8BestFilmOfYear.result.js';

// Exercise 1
describe('Function "getAllDirectors"', () => {
  it('should be declared', () => {
    expect(typeof getAllDirectors).toBe('function');
  });

  it('should return an array', () => {
    expect(getAllDirectors(movies) instanceof Array).toBe(true);
  });

  it('should return a new array, not update the original one', () => {
    expect(getAllDirectors(movies)).not.toEqual(movies);
  });

  it('should return a new array with the same length as the original one', () => {
    expect(getAllDirectors(ex1MoviesTestData)).toEqual([
      'Stanley Kubrick',
      'Quentin Tarantino'
    ]);
  });

  it('should return all the directors from the full movies data', () => {
    expect(getAllDirectors(movies)).toEqual(ex1ResultMoviesTotalDirectors);
  });
});

// Exercise 2
describe('Function "getMoviesFromDirector"', () => {
  it('should be declared', () => {
    expect(typeof getMoviesFromDirector).toBe('function');
  });

  it('should return an array', () => {
    expect(getMoviesFromDirector(movies) instanceof Array).toBe(true);
  });

  it('should return a new array, not update the original one', () => {
    expect(getMoviesFromDirector(movies)).not.toEqual(movies);
  });

  it('should return a new array with the movies from director', () => {
    expect(getMoviesFromDirector(ex2MoviesFromDirector, 'Quentin Tarantino')).toEqual(ex2ResultMoviesFromDirector);
  });

  it('shold return a new array with the movies from a director from the original data array', () => {
    expect(getMoviesFromDirector(movies, 'Steven Spielberg')).toEqual(ex2ResultMoviesTotalFromDirector);
  });
});

// Exercise 3
describe('Function "moviesAverageOfDirector"', () => {
  it('should be declared', () => {
    expect(typeof moviesAverageOfDirector).toBe('function');
  });

  it('should return a number', () => {
    expect(typeof moviesAverageOfDirector(movies, 'Stanley Kubrick')).toBe('number');
  });

  it('should be different from NaN', () => {
    expect(moviesAverageOfDirector(movies, 'Stanley Kubrick')).not.toBeNaN();
  });

  it(' should return the average score of movies selecting only the director films. With 2 decimals! ', () => {
    expect(moviesAverageOfDirector(ex3MoviesAverageFromDirector, 'Quentin Tarantino')).toBe(8.65);
  });

  it(' should return the average score of movies selecting only the director films from original movies data ', () => {
    expect(moviesAverageOfDirector(movies, 'Steven Spielberg')).toBe(8.36);
  });
});

// Exercise 4
describe('Function "orderAlphabetically"', () => {
  it('should be declared', () => {
    expect(typeof orderAlphabetically).toBe('function');
  });

  it('should return an array', () => {
    expect(typeof orderAlphabetically([])).toBe('object');
  });

  it('should not mutate the original array', () => {
    const arr = [{ title: 'xyz' }, { title: 'abc' }];
    orderAlphabetically(arr);
    expect(arr[0].title).toEqual('xyz');
  });

  it('should only return the title of the movies, each value should be a string', () => {
    expect(typeof orderAlphabetically([{ title: 'aab' }])[0]).toBe('string');
  });

  it('should return all of items when the array passed has fewer than 20 items', () => {
    const moviesArr = [{ title: 'aab' }, { title: 'bab' }, { title: 'acb' }];
    expect(orderAlphabetically(moviesArr)).toHaveLength(3);
  });

  it('should order them alphabetically.', () => {
    expect(orderAlphabetically(ex4AlphabeticalOrder)).toEqual(ex4ResultAlphabeticalOrder);
  });

  it('should return the top 20 after ordering them alphabetically.', () => {
    expect(orderAlphabetically(ex4AlphabeticalOrderTop20)).toEqual(ex4ResultAlphabeticalOrderTop20);
  });
});

// Exercise 5
describe('Function "orderByYear"', () => {
  it('should be declared', () => {
    expect(typeof orderByYear).toBe('function');
  });

  it('should return an array', () => {
    expect(typeof orderByYear(movies)).toBe('object');
  });

  it('should return a new array', () => {
    const arr = [];
    expect(orderByYear(arr)).not.toBe(arr);
  });

  it('should return the element in a single element array', () => {
    expect(orderByYear([{ year: 1982 }])).toEqual([{ year: 1982 }]);
  });

  it('should return the new array in ascending order', () => {
    expect(
      orderByYear([{ year: 2002 }, { year: 1982 }, { year: 1995 }])
    ).toEqual([{ year: 1982 }, { year: 1995 }, { year: 2002 }]);
  });

  it('should order movies with the same year by their title, alphabetically', () => {
    expect(
      orderByYear(ex5OrderByYear)
    ).toEqual(ex5ResultOrderByYear);
  });
});

// Exercise 6
describe('Function "moviesAverageByCategory"', () => {
  it('should be declared', () => {
    expect(typeof moviesAverageByCategory).toBe('function');
  });

  it('should return a number', () => {
    expect(typeof moviesAverageByCategory(movies, 'Drama')).toBe('number');
  });

  it('should be different from NaN', () => {
    expect(moviesAverageByCategory(movies, 'Category 1')).not.toBeNaN();
  });

  it('should return the average score of movies selecting only the category films from original movies data ', () => {
    expect(moviesAverageByCategory(movies, 'Drama')).toBe(8.32);
  });

  it('should return -1 if the movie category does not exists in data', () => {
    expect(moviesAverageByCategory(movies, 'not exists')).toBe(-1);
  });
});

// Exercise 7
describe('Function "hoursToMinutes"', () => {
  it('should be declared', () => {
    expect(typeof hoursToMinutes).toBe('function');
  });

  it('should return an array', () => {
    expect(hoursToMinutes(movies) instanceof Array).toBe(true);
  });

  it('should return a new array, not update the original one', () => {
    expect(hoursToMinutes(movies)).not.toEqual(movies);
  });

  it('should return an array of movies with duration as a number', () => {
    expect(typeof hoursToMinutes(movies)[0].duration).toBe('number');
  });

  it('should return an array of movies with the correct duration for a 31 minute movie', () => {
    const movieTry = [{ duration: '0h 31min' }];
    expect(hoursToMinutes(movieTry)[0].duration).toBe(31);
  });

  it('should return an array of movies with the correct duration for a 341 minute movie', () => {
    const movieTry = [{ duration: '5h 41min' }];
    expect(hoursToMinutes(movieTry)[0].duration).toBe(341);
  });

  it('should return an array of movies with the correct duration for a 2 hour movie', () => {
    const movieTry = [{ duration: '2h' }];
    expect(hoursToMinutes(movieTry)[0].duration).toBe(120);
  });

  it('should return an array of movies with the correct duration for a 35 minutes movie', () => {
    const movieTry = [{ duration: '35min' }];
    expect(hoursToMinutes(movieTry)[0].duration).toBe(35);
  });

  it('should return an empty array of movies if there is an error transforming duration', () => {
    const movieTry = [{ duration: '35m' }];
    expect(hoursToMinutes(movieTry)[0].duration).toBe(Number.NaN);
  });
});


// Exercise 8
describe('Function "bestFilmOfYear"', () => {
  it('should be declared', () => {
    expect(typeof bestFilmOfYear).toBe('function');
  });

  it('should return an array', () => {
    expect(bestFilmOfYear(movies, 1999) instanceof Array).toBe(true);
  });

  it('should return a new array, not update the original one', () => {
    expect(bestFilmOfYear(movies, 1999)).not.toEqual(movies);
  });

  it('should return the best film of a year, searching in an array', () => {
    expect(bestFilmOfYear(ex8BestFiltOfYear, 1957)).toEqual(ex8ResultBestFiltOfYear);
  });
});