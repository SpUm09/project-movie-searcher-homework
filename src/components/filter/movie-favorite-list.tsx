import React from 'react';
import { useSelector } from 'react-redux';
import { favoriteMovies } from '../../reselect/selectors';
import { MovieItem } from '../movie-item';

const FavoriteList = () => {
    const infoMovies = useSelector<RootStore, ListElement[]>(state => state.list);
    const favorite = favoriteMovies(infoMovies);

    return (
        <>
            <h2>Favorite Movies</h2>
            <ul className='movie-list'>
                {favorite &&
                    favorite.map(item => {
                        return <MovieItem movie={item} key={item.id} />;
                    })}
            </ul>
        </>
    );
};

export default FavoriteList;
