import React, { useContext } from 'react';

import { DeckContext } from '../../context';

import DeckGrid from '../../components/DeckGrid';

export default () => {
    const { decks=[] } = useContext(DeckContext);

    return <DeckGrid decks={decks} />;
};