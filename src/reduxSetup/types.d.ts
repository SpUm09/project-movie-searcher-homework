type ListElement = {
    id: number;
    title: string;
    imdb_id: string;
    overview: string;
    genres: string[];
    revenue: number;
    duration: number;
    likes: number;
    vote_average: number;
    vote_count: number;
    director: string;
    poster_path: string;
    release_date: string;
    isFavorite?: boolean;
};

type RootStore = { list: ListElement[] };

type Action<T> = { type: string; payload: T };

type ActionsT = typeof GET_MOVIES | typeof FAVORITE_ADD | 'DEFAULT';

type RootReducer<T = ActionsT> = (state: RootStore, action: Action<T>) => RootStore;
