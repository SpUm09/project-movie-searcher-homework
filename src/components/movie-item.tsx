import React, { useState } from 'react';
import { POSTER_PATH } from '../constants';
import { useDispatch } from 'react-redux';
import { addFavorite } from '../reduxSetup/actions';

function MovieItem(props: { movie: ListElement }) {
    const { movie } = props;
    // const [favorites, setFavoritesState] = useState(false);

    const dispatch = useDispatch();

    const toFavorites = () => {
        dispatch(addFavorite(movie.id));
    };

    return (
        <div className='movie-item'>
            <ul>
                <li className='movie-item__poster'>
                    <img src={`${POSTER_PATH}/${movie.poster_path}`} alt='' />
                </li>
                <li>id: {movie.id}</li>
                <li>title: {movie.title}</li>
                <li>imdb id: {movie.imdb_id}</li>
                <li>{movie.overview}</li>
                <li>genres: {movie.genres.join(', ')}</li>
                <li>revenue: {movie.revenue}</li>
                <li>duration: {movie.duration}</li>
                <li>likes: {movie.likes}</li>
                <li>vote average: {movie.vote_average}</li>
                <li>vote count: {movie.vote_count}</li>
                <li>director: {movie.director}</li>
                <li>release date: {movie.release_date}</li>
            </ul>
            <button onClick={toFavorites}>{movie.isFav ? `favorites` : `NO favorites`}</button>
        </div>
    );
}

export { MovieItem };
