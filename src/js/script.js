"use strict";

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', ''),
    c = prompt('Один из последних просмотренных фильмов?', ''),
    d = prompt('На сколько оцените его?', '');

    personalMovieDB.movies[a] = b; /* присваиваем ответу на первый вопрос, ответ на второй вопрос в переменную movies */
    personalMovieDB.movies[c] = d; // присваиваем ответу на третий вопрос, ответ на етвертый вопрос в переменную movies

    console.log(personalMovieDB);
