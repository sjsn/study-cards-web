import React, { lazy, Suspense, useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import useFetch from '../../hooks/useFetch';
import { DeckContext } from '../../context';

import Loader from '../../components/Loader';
import MainLayout from '../../layouts/Main';
import HomeNav from '../HomeNav';

const NotFound = lazy(() => import('../../pages/NotFound')); 
const HomePage = lazy(() => import('../../pages/HomePage'));
const DeckPage = lazy(() => import('../../pages/DeckPage'));

export default () => {
    const response = useFetch('/decks');

    const [selectedDeck, setSelectedDeck] = useState({});

    return (
        <DeckContext.Provider
            value={{
                selectedDeck,
                setSelectedDeck,
                decks: response.data || [],
                isLoading: response.isLoading
            }}>
            <MainLayout
                Header={
                    <Switch>
                        <Route component={HomeNav} />
                    </Switch>
                }
            >
                {
                    response.isLoading ? 
                        <Loader /> :
                        <Suspense fallback={<Loader />}>
                            <Switch>
                                <Route exact path="/" render={() => <HomePage />} />
                                <Route exact path="/d/:deckId" render={() => <DeckPage />} />
                                <Route render={() => <NotFound />} />
                            </Switch>
                        </Suspense>
                }
            </MainLayout>
        </DeckContext.Provider>
    );
};