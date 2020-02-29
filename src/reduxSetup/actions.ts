import { LOAD_MOVIES, FAVORITE_ADD, MOVIE_SEARCH, RESET_ALL } from './actionTypes';

export const getMovies = (newElements: ListElement[]) => ({
    type: LOAD_MOVIES,
    payload: newElements,
});

export const addFavorite = (id: number) => ({
    type: FAVORITE_ADD,
    payload: id,
});

export const searchMovies = (title: string) => ({
    type: MOVIE_SEARCH,
    payload: title,
});
export const resetStore = () => ({ type: RESET_ALL });
