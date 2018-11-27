import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'react-emotion';

const PrimnaryNav = styled('nav')`
    box-shadow: 0px 1px 5px #888;
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const NavTitle = styled(NavLink)`
    font-size: 24px;
    margin: 0;
    text-decoration: none;
    font-weight: 100;
    color: #555;

    &:hover {
        color: #333;
    }
`;

export default () => (
    <PrimnaryNav>
        <NavTitle to="/">Study Cards</NavTitle>
    </PrimnaryNav>
);