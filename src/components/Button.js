import React from 'react';

import './Button.scss';

const Button = ({ children, onClick }) => {
  return <div className='app-button' onClick={onClick}>
    <span>{children}</span>
  </div>
};

export default Button;