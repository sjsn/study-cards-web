import React, { useContext } from 'react';
import { withRouter, Link } from 'react-router-dom';

import { DeckContext } from '../../context';

import Container from '../../components/PageContainer';
import Button from '../../components/Button';
import EmptyMsg from '../../components/EmptyMsg';
import CardList from '../../components/CardList';

export default withRouter(({ match }) => {
    const { decks, selectedDeck, setSelectedDeck } = useContext(DeckContext);
    const currentDeck = decks.filter(deck => +deck.id === +match.params.deckId)[0];

    if (currentDeck && currentDeck.id !== selectedDeck.id) {
        setSelectedDeck(currentDeck);
    }

    return (
        <Container>
            <Button to="/">{'<- Back'}</Button>
            {
                !currentDeck ?
                    <EmptyMsg>
                        Oh no! That deck does not exist. <br />
                        <Link to="/">{'<- Go back to browse'}</Link>.
                    </EmptyMsg> :
                    <CardList cards={currentDeck.cards} />
            }
        </Container>
    );
});