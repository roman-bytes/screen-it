import React from 'react';
import Rating from './Rating';

const Movie = ({ movie }) => {
    return (
        <div className="w-full flex flex-row border-t border-lineColor items-center py-4">
            <div className="bg-lightBlue rounded-full w-16 h-16 flex justify-center items-center text-2xl text-white">
                {movie.name.charAt(0).toUpperCase()}
            </div>
            <div className="flex flex-col flex-auto ml-6">
                <span className="text-semibold text-2xl leading-tight">
                    {movie.name}
                </span>
                <span className="text-medium text-textLight text-base leading-tight">
                    {movie.category}
                </span>
            </div>
            <div>
                <Rating stars={movie.rating} />
            </div>
        </div>
    );
};

export default Movie;
