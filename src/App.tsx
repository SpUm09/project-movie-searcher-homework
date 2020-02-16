import React from 'react';
import MoveList from './components/movie-list';
import Header from './components/header/header';
import FavoriteList from './components/filter/movie-favorite-list';
import FilterMenu from './components/filter/filter-menu';
import './components/style/style.css';

const App: React.FC = () => {
    return (
        <div className='App'>
            <Header />
            <MoveList />
            <FavoriteList />
            <FilterMenu />
        </div>
    );
};

export default App;
