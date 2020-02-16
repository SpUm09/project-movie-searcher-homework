import { LOAD_MOVIES, MOVIE_SEARCH, FAVORITE_ADD, RESET_ALL } from './actionTypes';

const initialState: RootStore = { list: [] };

const actionHanlder = new Map<string, RootReducer>([
    [
        LOAD_MOVIES,
        (state, action: Action<ActionsT>) => {
            const { list } = state;
            return { list: action.payload };
        },
    ],
    [
        FAVORITE_ADD,
        (state, action: Action<ActionsT>) => {
            return {
                ...state,
                list: state.list.map((movie: ListElement) => {
                    return movie.id === action.payload ? { ...movie, isFavorite: !movie.isFavorite } : movie;
                }),
            };
        },
    ],
    [
        MOVIE_SEARCH,
        (state, action: Action<ActionsT>) => {
            return {
                ...state,
                list: state.list.filter((movie: ListElement) => {
                    return movie.title.toUpperCase().includes(action.payload.toUpperCase());
                }),
            };
        },
    ],
    [RESET_ALL, () => initialState],
    ['DEFAULT_PLUG', (state: RootStore) => state],
]);

export function rootReducer(state = initialState, action: Action<ActionsT>) {
    const reducerToFire = (actionHanlder.has(action.type)
        ? actionHanlder.get(action.type)
        : actionHanlder.get('DEFAULT_PLUG')) as RootReducer;

    return reducerToFire(state, action);
}
