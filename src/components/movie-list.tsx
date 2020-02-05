// import React, { useState, useEffect } from 'react';
import React, { useState, useEffect } from 'react';
// import movies from '../movies/movies.json';
import { MOVIES_URL } from '../constants';

import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../reduxSetup/actions';

import { MovieItem } from '../components/movie-item';

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
        <div className='movie-list'>
            {moviesList.map((item, index) => {
                return <MovieItem movie={item} key={index} />;
            })}
        </div>
    );
}

export default MovieList;
