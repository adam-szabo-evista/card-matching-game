import React, { useState, useEffect } from 'react';

import Layout from '../../components/Layout/Layout';
import StatusBar from './StatusBar';
import Board from './Board';

import {
  createNewGame,
  flipCard,
  getFlippedCards,
  isGameFinished,
  processFlippedCards,
  unflipCards
} from '../../util/helpers';

const storage = localStorage;

const Game = () => {
  const [tries, setTries] = useState(0);
  const [best, setBest] = useState('-');

  const [cards, setCards] = useState([]);
  const [initialised, setInitialised] = useState(false);

  const flip = (position) => {
    let newCards = flipCard(cards, position);

    const flipped = getFlippedCards(cards)

    if (flipped.length === 2) {
      newCards = processFlippedCards(cards, flipped);
      setTries(tries + 1);
      setCards(newCards);
    }

    setCards(newCards);
  }

  const restartGame = () => {
    let newCards = unflipCards(cards);

    setCards(newCards);
    setTries(0);
  }

  const newGame = (deckSize = 20) => {
    setCards(createNewGame(deckSize));
  }

  useEffect(() => {
    if (Array.isArray(cards) && cards.length) {      
      storage.setItem('cards', JSON.stringify(cards));
      storage.setItem('tries', JSON.stringify(tries));
    }
  }, [cards, tries])

  useEffect(() => {
    if (!initialised) {
      let parsedCards = JSON.parse(storage.getItem('cards'));
      let parsedTries = JSON.parse(storage.getItem('tries'));

      if (!parsedCards) {
        setCards(createNewGame(20));
        setTries(0);
      } else {
        setCards(parsedCards);
        setTries(parsedTries);
      }

      setInitialised(true);
    }
  }, [initialised]);

  return (
    <Layout newGame={newGame}>
      <div className='page-game'>
        <StatusBar tries={tries} best={best} restartGame={restartGame}/>
        <Board cards={cards} flip={flip} />
      </div>
    </Layout>
  )
}

export default Game;