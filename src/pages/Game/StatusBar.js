import React from 'react';

import './StatusBar.scss';

import Button from '../../components/Button';

const StatusBar = ({ tries, best, restartGame }) => {
  return <div className='status-bar'>
    <div className='tries'>
      <span class='label'>{'Current tries:'}</span>
      <span class='number'>{tries}</span>
    </div>
    <div className='best'>
      <span class='label'>{'Best:'}</span>
      <span class='number'>{best}</span>
    </div>
    <div className='controls'>
      <Button type='secondary' onClick={restartGame}>{'Restart'}</Button>
    </div>
  </div>
}

export default StatusBar;