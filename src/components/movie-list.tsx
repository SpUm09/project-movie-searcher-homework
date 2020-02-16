import React, { useEffect } from 'react';
import { MOVIES_URL } from '../constants/constants';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../reduxSetup/actions';

import { MovieItem } from './movie-item';

function MovieList() {
    const dispatch = useDispatch();
    const moviesList = useSelector((state: { list: [] }) => state.list);

    useEffect(() => {
        fetch(`${MOVIES_URL}/movies`)
            .then<ListElement[]>(response => response.json())
            .then(response => {
                dispatch(getMovies(response));
            })
            .catch(err => alert('Что то пошло не так, братан ' + err));
    }, []);
    return (
        <ul className='movie-list'>
            {moviesList.map((item, index) => {
                return <MovieItem movie={item} key={index} />;
            })}
        </ul>
    );
}

export default MovieList;
