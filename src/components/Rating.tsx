import React, { useState } from 'react';

interface RatingProps {
    stars: number;
}

const Rating = React.forwardRef(({ stars }: RatingProps, ref) => {
    const [rating, setRating] = useState(stars);

    const updateRating = (rating) => {
        setRating(rating + 1);
    };

    // eslint-disable-next-line prefer-spread
    const renderStars = Array.apply(null, { length: 5 }).map((e, i) => {
        const color = rating > i ? 'text-yellow-500' : 'text-gray-400';

        return (
            <svg
                key={i}
                width={26}
                height={24}
                viewBox="0 0 26 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`fill-current mx-1 ${color} cursor-pointer`}
                onClick={() => updateRating(i)}
            >
                <path d="M11.1651 1.23147C11.8614 -0.374294 14.1386 -0.374295 14.8349 1.23146L16.8752 5.93645C17.165 6.60476 17.7952 7.06265 18.5203 7.13175L23.6255 7.61822C25.3679 7.78425 26.0716 9.94998 24.7596 11.1084L20.9153 14.5027C20.3693 14.9849 20.1285 15.7258 20.2869 16.4368L21.4018 21.4424C21.7824 23.1508 19.9401 24.4893 18.4329 23.5995L14.0168 20.9923C13.3895 20.622 12.6105 20.622 11.9832 20.9923L7.5671 23.5995C6.05993 24.4893 4.21764 23.1508 4.59816 21.4424L5.71308 16.4368C5.87145 15.7258 5.63072 14.9849 5.08468 14.5027L1.24044 11.1084C-0.0715549 9.94999 0.632135 7.78425 2.37448 7.61822L7.47965 7.13175C8.20481 7.06265 8.83504 6.60476 9.12485 5.93645L11.1651 1.23147Z" />
            </svg>
        );
    });

    return (
        <div className="flex justify-center items-center">
            <input type="text" hidden value={rating} ref={ref} />
            <div className="flex items-center mt-2 mb-4">{renderStars}</div>
        </div>
    );
});

Rating.displayName = 'Rating';

export default Rating;
