import React, { useState } from 'react';

export interface IMovieItem {
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
}

function MovieItem(props: { movie: IMovieItem }) {
    const { movie } = props;

    const [favorites, setFavoritesState] = useState(false);

    function toFavorites() {
        setFavoritesState(!favorites);
    }

    return (
        <div className='movie-item'>
            <ul>
                <li>id: {movie.id}</li>
                <li>title: {movie.title}</li>
                <li>imdb id: {movie.imdb_id}</li>
                <li>overview: {movie.overview}</li>
                <li>genres: {movie.genres.join(', ')}</li>
                <li>revenue: {movie.revenue}</li>
                <li>duration: {movie.duration}</li>
                <li>likes: {movie.likes}</li>
                <li>vote average: {movie.vote_average}</li>
                <li>vote count: {movie.vote_count}</li>
                <li>director: {movie.director}</li>
                <li>poster: {movie.poster_path}</li>
                <li>release date: {movie.release_date}</li>
            </ul>
            <div>
                <button onClick={toFavorites}>{favorites ? `favorites` : `NO favorites`}</button>
            </div>
        </div>
    );
}

export { MovieItem };
