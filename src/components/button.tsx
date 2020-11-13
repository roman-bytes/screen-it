import React from 'react';

export default class Button extends React.Component {
    render() {
        const { children, ...other } = this.props;
        return (
            <button
                className="mx-auto bg-gradient-to-b from-lightBlue to-darkBlue flex items-center flex justify-center items-center text-2xl p-6 w-full md:w-buttonWidth text-white font-semibold border-blue rounded shadow"
                {...other}
            >
                {children}
            </button>
        );
    }
};
