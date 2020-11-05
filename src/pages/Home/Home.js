import React from 'react';

import './Home.scss';

import Layout from '../../components/Layout/Layout';
import Button from '../../components/Button';
import Rules from './Rules';

const Home = () => {
  return (
    <Layout>
      <div className="page-home">
        <Rules />
        <div className="controls">
          <Button>{'Start new game'}</Button>
        </div>
      </div>
    </Layout>
  )
}

export default Home;