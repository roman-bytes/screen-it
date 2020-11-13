import React from 'react';
import { useStateValue } from '../state';
import Movie from './Movie';

const MovieList = () => {
    const [{ movies }]: {} = useStateValue();

    const renderMovies = movies.map((movie) => (
        <Movie key={movie.name} movie={movie} />
    ));
    return <div className="flex mt-8 flex-col border-b">{renderMovies}</div>;
};

export default MovieList;
