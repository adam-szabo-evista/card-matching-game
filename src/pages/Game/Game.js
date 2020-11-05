import React, { useState } from 'react';

import Layout from '../../components/Layout/Layout';
import StatusBar from './StatusBar';
import Board from './Board';

import {
  createNewGame,
  flipCard,
  getFlippedCards,
  processFlippedCards,
  unflipCards
} from '../../util/helpers';

const Game = () => {
  const [tries, setTries] = useState(0);
  const [best, setBest] = useState('-');

  const [cards, setCards] = useState(createNewGame(20));

  const flip = (position) => {
    let newCards = flipCard(cards, position);

    const flipped = getFlippedCards(cards)

    if (flipped.length === 2) {
      newCards = processFlippedCards(cards, flipped);
      setTries(tries + 1);
    }

    setCards(newCards);
  }

  const restartGame = () => {
    let newCards = unflipCards(cards);

    setCards(newCards);
    setTries(0);
  }

  return (
    <Layout>
      <div className='page-game'>
        <StatusBar tries={tries} best={best} restartGame={restartGame}/>
        <Board cards={cards} flip={flip} />
      </div>
    </Layout>
  )
}

export default Game;