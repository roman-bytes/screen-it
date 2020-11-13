import React from 'react';

export default class Button extends React.Component {
    render() {
        const { children, ...other } = this.props;
        return (
            <button
                className="bg-gradient-to-b from-lightBlue to-darkBlue flex items-center justify-between px-2 py-0 text-white font-semibold border-blue rounded shadow"
                {...other}
            >
                {children}
            </button>
        );
    }
};
