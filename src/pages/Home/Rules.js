import React from 'react';

import './Rules.scss';

const Rules = () => {
  return (
    <div class="home-rules">
      <h2>Splendex Memory Game</h2>
      <ul>
        <li>
          <p>{'Players are presenten with an even number of cards, “face down”.'}</p>
        </li>
        <li>
          <p>{'When the player clicks a card, it will be flipped over to reveal the hidden image.'}</p>
        </li>
        <li>
          <p>{'When two cards are revealed:'}</p>
          <ul>
            <li>
              <p>{'If the cards are identical, they will be removed from play.'}</p>
            </li>
            <li>
              <p>{'If they are not, they will be flipped back.'}</p>
            </li>
          </ul>
        </li>
        <li>
          <p>{'The game ends when all the cards are removed.'}</p>
        </li>
      </ul>
    </div>
  )
};

export default Rules;