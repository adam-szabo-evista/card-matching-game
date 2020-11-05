import React, { useState } from 'react';

import Layout from '../../components/Layout/Layout';
import StatusBar from './StatusBar';

const Game = () => {
  const [tries, setTries] = useState(0);
  const [best, setBest] = useState('-');

  return (
    <Layout>
      <div className="page-game">
        <StatusBar tries={tries} best={best}/>
      </div>
    </Layout>
  )
}

export default Game;