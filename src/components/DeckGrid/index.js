import React from 'react';
import styled from 'react-emotion';

import DeckGridItem from '../DeckGridItem';

const DeckGrid = styled('div')`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding-top: 50px;
`;

export default ({ decks }) => {
    let contents = <p className="empty-msg">You have no decks. Click the '+' to add one.</p>;
    if (decks.length > 0) {
        contents = decks.map(deck => (
            <DeckGridItem key={deck.id} {...deck} />
        ));
    }
    return (
        <DeckGrid>
            {contents}
        </DeckGrid>
    );
};