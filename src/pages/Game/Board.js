import React from 'react';

import './Board.scss';

import Card from './Card';

const Board = ({ cards = [], flip }) => {
  return (
    <div className="board">
      {cards.map((card, idx) => {
        return (
          <Card
            key={idx}
            cardNr={card.cardNr}
            position={idx}
            state={card.state}
            flip={flip}
          />
        );
      })}
    </div>
  );
};

export default Board;