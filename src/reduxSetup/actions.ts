import { LOAD_MOVIES, FAVORITE_ADD, RESET_ALL } from './actionTypes';

export const getMovies = (newElements: ListElement[]) => ({
    type: LOAD_MOVIES,
    payload: newElements,
});

export const addFavorite = (id: number) => ({
    type: FAVORITE_ADD,
    payload: id,
});

export const resetStore = () => ({ type: RESET_ALL });
