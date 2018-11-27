import React from 'react';

import Button from '../../components/Button';

export default ({ Header, children, hasBack }) => (
    <div className="home-container">
        {Header}
        {
            hasBack &&
            <div className="back-button">
                <Button to="/">{'<- Back'}</Button>
            </div>
        }
        {children}
    </div>
);