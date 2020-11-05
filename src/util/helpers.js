// Taken from: https://stackoverflow.com/a/6274398
export const shuffle = (array) => {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

export const CARD_STATES = {
  FACEDOWN: 'facedown',
  FLIPPED: 'flipped',
  MATCHED: 'matched'
};

/*export const GAME_STATES = {
  NEW: 'new',
  IN_PROGRESS: 'inprogress',
  FINISHED: 'finished'
};*/

export const createNewDeck = (deckSize) => {
  let newDeck = [];

  for(let cardNr = 0; cardNr < 10; cardNr++) {
    newDeck.push(cardNr);
  }

  shuffle(newDeck);
  newDeck = newDeck.slice((20 - deckSize) / 2);
  newDeck = newDeck.concat(newDeck);
  shuffle(newDeck);

  return newDeck;
};

export const createNewGame = (deckSize = 20) => {
  const deck = createNewDeck(deckSize);

  const cards = [];

  for(let position = 0; position < deckSize; position++) {
    cards.push({
      state: CARD_STATES.FACEDOWN,
      cardNr: deck[position],
      position
    });
  }

  return cards;
};

export const unflipCards = (cards) => {
  return cards.map((card) => {
    return {
      ...card,
      state: CARD_STATES.FACEDOWN
    };
  });
};

export const flipCard = (cards, position) => {
  return cards.map((card, index) => {
    if (index === position) {
      return {
        ...card,
        state: CARD_STATES.FLIPPED
      }
    };

    return card;
  });
};

export const getFlippedCards = (cards) => {
  let flipped = [];

  for (let idx = 0; idx < cards.length; idx++) {
    const currentCard = cards[idx];

    if (currentCard.state = CARD_STATES.FLIPPED) {
      flipped.push({
        position: idx,
        card: currentCard
      })
    }
  }

  return flipped
}

export const processFlippedCards = (cards, flipped) => {
  const newCards = [].concat(cards);

  let nextState;
  if (flipped[0].card.state === flipped[1].card.state) {
    nextState = CARD_STATES.MATCHED;
  } else {
    nextState = CARD_STATES.FACEDOWN;
  }

  flipped[0].card.state = nextState;
  flipped[1].card.state = nextState;

  newCards[flipped[0].position] = flipped[0].card;
  newCards[flipped[1].position] = flipped[1].card;

  return newCards;
}