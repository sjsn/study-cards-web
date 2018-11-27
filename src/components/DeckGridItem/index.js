import React from 'react';
import styled from 'react-emotion';
import { Link } from 'react-router-dom';
import moment from 'moment';

const DeckLink = styled(Link)`
    color: #000;
    text-decoration: none;
`;

const Deck = styled('div')`
    position: relative;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 10px;
    width: 300px;
    height: 200px;
    box-shadow: 1px 1px 5px #ddd;
    text-align: center;

    &:hover {
        box-shadow: 2px 2px 10px #ccc;
    }

    > h1 {
        margin-top: 20%;
        font-size: 22px;
    }

    > p {
        text-align: center;
        font-size: 12px;
        color: #777;
        width: 100%;
        position: absolute;
        bottom: 0;
    }
`;

export default ({ id, name, updatedAt }) => (
    <DeckLink to={`/d/${id}`}>
        <Deck>
            <h1>{name}</h1>
            <p>
                Updated At: {moment(new Date(updatedAt)).format('M/D/YY')}
            </p>
        </Deck>
    </DeckLink>
);