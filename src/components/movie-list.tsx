import React, { useState, useEffect } from 'react';
// import movies from '../movies/movies.json';

import { MovieItem, IMovieItem } from '../components/movie-item';

function MovieList() {
    const [movies, setMovie] = useState<IMovieItem[]>([]);
    useEffect(() => {
        fetch('https://devlab.website/v1/movies')
            .then(response => response.json())
            .then(response => {
                setMovie(response);
            })
            .catch(err => alert('Что то пошло не так, братан ' + err));
    }, []);
    return (
        <div className='movie-list'>
            {movies.map((item, index) => {
                return <MovieItem movie={item} key={index} />;
            })}
        </div>
    );
}

export default MovieList;
