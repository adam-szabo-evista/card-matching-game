import React from 'react';

import './Layout.scss';

import Header from './Header/Header';

const Layout = ({ children }) => {
  return <div className='layout'>
    <Header />
    <div className='layout-content'>
      {children}
    </div>
  </div>
}

export default Layout;