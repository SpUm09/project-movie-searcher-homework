import React, { useState, useCallback } from 'react';
import { POSTER_PATH } from '../constants/constants';
import { useDispatch } from 'react-redux';
import { addFavorite } from '../reduxSetup/actions';

function MovieItem(props: { movie: ListElement }) {
    const { movie } = props;

    const dispatch = useDispatch();

    const toFavorites = useCallback(() => {
        dispatch(addFavorite(movie.id));
    }, [addFavorite(movie.id)]);

    return (
        <li className='movie-item'>
            <div className='movie-item__poster'>
                <img src={`${POSTER_PATH}/${movie.poster_path}`} alt='' />
            </div>
            <div className='movie-item__title'>{movie.title}</div>
            <button onClick={toFavorites}>{movie.isFavorite ? `😍` : `😐`}</button>
        </li>
    );
}

export { MovieItem };
