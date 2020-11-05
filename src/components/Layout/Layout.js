import React from 'react';

import './Layout.scss';

import Header from './Header/Header';

const Layout = ({ children, newGame }) => {
  return <div className='layout'>
    <Header newGame={newGame} />
    <div className='layout-content'>
      {children}
    </div>
  </div>
}

export default Layout;