import React from 'react';
import data from './movies/movies.json';
import { MoviesList } from './components/movie-list';

const App: React.FC = () => {
    return <MoviesList {...data} />;
};

export default App;
