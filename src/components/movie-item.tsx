import * as React from 'react';
import './style/movie-item.css';

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
    director?: string;
    poster_path?: string;
    release_date: string;
}

interface IMovieItemProps {
    data: IMovieItem;
}

const MovieItem: React.FC<IMovieItemProps> = ({ data: { id, title, overview, genres } }) => {
    return (
        <article className='movie-item'>
            <div>{id}</div>
            <div>{title}</div>
            <div>{overview}</div>
            <div>{genres}</div>
        </article>
    );
};

export { MovieItem };
