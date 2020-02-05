import { LOAD_MOVIES, RESET_ALL, FAVORITE_ADD } from './actionTypes';

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
                    return movie.id === action.payload ? { ...movie, isFav: !movie.isFav } : movie;
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
