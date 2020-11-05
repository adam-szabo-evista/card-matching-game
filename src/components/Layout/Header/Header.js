import React from 'react';
import { useLocation } from 'react-router-dom';

import splendexLogo from '../../../assets/splendex-logo.svg';
import './Header.scss';

import Button from '../../Button';

const Header = ({ newGame }) => {
  const location = useLocation();

  const renderControls = location.pathname === '/game';

  return <header className='layout-header'>
    <img className='logo' src={splendexLogo} alt='Splendex logo' />
    {renderControls && (
      <div className='controls'>
        <Button onClick={newGame}>{'Start new game'}</Button>
      </div>
    )}
  </header>;
}

export default Header;