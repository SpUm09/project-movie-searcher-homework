import { createSelector } from 'reselect';

const ListMovies = (movies: ListElement[]) => movies;

export const favoriteMovies = createSelector(ListMovies, function(movies) {
    return movies.filter(function(movie) {
        return movie.isFavorite === true;
    });
});
