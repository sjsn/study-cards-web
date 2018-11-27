import React from 'react';
import { Link } from 'react-router-dom';

export default ({ onClick, to, round, children }) => {
    if (onClick) {
        return (
            <button
                className={`button ${round ? 'round' : ''}`}
                onClick={onClick}
            >
                {children}
            </button>
        );
    }
    if (to) {
        return (
            <Link
                to={to}
                className={`button ${round ? 'round' : ''}`}
            >
                {children}
            </Link>
        );
    }
};