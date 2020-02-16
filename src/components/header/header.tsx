import React, { useState, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { MOVIES_URL } from '../../constants/constants';
import { searchMovies, getMovies } from '../../reduxSetup/actions';

export default function Header() {
    const dispatch = useDispatch();
    const [title, setTitle] = useState<string>('');
    const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value);
    };

    const searchMovie = () => {
        if (title) {
            dispatch(searchMovies(title));
        } else {
            fetch(`${MOVIES_URL}/movies`)
                .then<ListElement[]>(response => response.json())
                .then(response => {
                    dispatch(getMovies(response));
                })
                .catch(err => alert('Что то пошло не так, братан ' + err));
        }
    };

    return (
        <div className='header'>
            <input type='text' onChange={handleTitleChange} value={title} />
            <button onClick={searchMovie}>Search</button>
        </div>
    );
}
