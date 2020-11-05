import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Game from './pages/Game/Game';
import Home from './pages/Home/Home';

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/game' component={Game} />
        <Route exact path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
