import React from 'react';
import { useHistory } from 'react-router-dom';

import './Home.scss';

import Layout from '../../components/Layout/Layout';
import Button from '../../components/Button';
import Rules from './Rules';

const Home = () => {
  const history = useHistory();

  const startNewGame = () => {
    history.push('/game');
  }

  return (
    <Layout>
      <div className="page-home">
        <Rules />
        <div className="controls">
          <Button onClick={startNewGame}>{'Start new game'}</Button>
        </div>
      </div>
    </Layout>
  )
}

export default Home;