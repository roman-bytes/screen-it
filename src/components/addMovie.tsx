import React from 'react';
import Button from './button';
import Rating from './Rating';
import Select from './Select';
import { useStateValue } from '../state';

const AddMovie = () => {
    const [{ theme }, dispatch] = useStateValue();

    return (
        <div className="container mx-auto">
            <label>
                Name
                <input type="text" placeholder="Name of the movie" />
            </label>
            <label>
                Category
                <Select />
            </label>
            <label>
                Rating
                <Rating />
            </label>
            <Button
                onClick={() =>
                    dispatch({
                        type: 'addMovie',
                        movie: {
                            name: 'Star Wars',
                            category: 'Sci-Fi',
                            Rating: 5,
                        },
                    })
                }
            >
                Add Movie
            </Button>
        </div>
    );
};

export default AddMovie;
