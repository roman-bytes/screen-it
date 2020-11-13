import React, { useRef } from 'react';
import Button from './button';
import Rating from './Rating';
import { useStateValue } from '../state';
import Select from './Select';

const AddMovie = () => {
    const inputEl = useRef(null);
    const selectEl = useRef(null);
    const ratingEl = useRef(null);
    const [{ movies }, dispatch] = useStateValue();

    return (
        <div className="px-2 md:px-4 max-w-2xl mx-auto flex flex-col">
            <label className="flex flex-row justify-between items-center text-2xl text-semibold my-2">
                Name
                <input
                    type="text"
                    ref={inputEl}
                    placeholder="Name of the movie"
                    className="my-2 bg-white p-1 flex border border-gray-200 rounded w-2/3"
                />
            </label>
            <label className="flex flex-row justify-between items-center text-2xl text-semibold my-2">
                Category
                <Select
                    options={['Action', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Mystery', 'Romance', 'Thriller']}
                    ref={selectEl}
                />
            </label>
            <label className="flex flex-row justify-between items-center text-2xl text-semibold my-2">
                <span>Rating</span>
                <Rating stars={0} ref={ratingEl} />
            </label>
            <Button
                onClick={() => {
                    console.log('inputEl', inputEl);
                    console.log('selectEl', selectEl);
                    console.log('ratingEl', ratingEl);
                    dispatch({
                        type: 'addMovie',
                        movie: {
                            name: inputEl.current.value,
                            category: selectEl.current.value,
                            rating: ratingEl.current.value,
                        },
                    });
                }}
            >
                Add Movie
            </Button>
        </div>
    );
};

export default AddMovie;
