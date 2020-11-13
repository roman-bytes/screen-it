import React from 'react';

interface SelectProps {
    options: string[];
};

const Select = React.forwardRef(({ options }: SelectProps, ref) => {
    const renderOptions = options.map((option) => (
        <option key={option} value={option}>
            {option}
        </option>
    ));

    return (
        <div className="relative w-2/3">
            <select
                className="block appearance-none w-full border border-gray-200 text-gray-700 py-2 px-2 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                ref={ref}
            >
                <option value="" disabled selected>
                    Select a category
                </option>
                {renderOptions}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
            </div>
        </div>
    );
});

Select.displayName = 'Select';

export default Select;
