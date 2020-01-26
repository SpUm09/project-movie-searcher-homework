import React from 'react';
import { IMovieItem, MovieItem } from '../components/movie-item';

export const MoviesList = (props: IMovieItem[]) => {
    return (
        <section className='movie-list'>
            {Object.keys(props).map((item, index) => {
                return <MovieItem data={{ ...props[index] }} />;
            })}
        </section>
    );
};
