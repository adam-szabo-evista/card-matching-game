import React from 'react';

import angular from '../../assets/cards/angular.png';
import d3 from '../../assets/cards/d3.png';
import jenkins from '../../assets/cards/jenkins.png';
import postcss from '../../assets/cards/postcss.png';
import react from '../../assets/cards/react.png';
import redux from '../../assets/cards/redux.png';
import sass from '../../assets/cards/sass.png';
import splendex from '../../assets/cards/splendex.png';
import ts from '../../assets/cards/ts.png';
import webpack from '../../assets/cards/webpack.png';
import { CARD_STATES } from '../../util/helpers';

import './Card.scss';

const deck = [
  angular, d3, jenkins, postcss, react, redux, sass, splendex, ts, webpack
];

const getCardImage = (cardNr) => {
  return deck[cardNr];
}

const Card = ({ cardNr, state, position, flip}) => {
  const src = getCardImage(cardNr);

  return <div className={`card-sheet ${state}`} onClick={state !== CARD_STATES.MATCHED ? () => flip(position) : null}>
    <img className='card' src={src} />
  </div>
}

export default Card;