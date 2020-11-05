import React from 'react';

import './Button.scss';

const Button = ({ children, onClick, type = 'primary' }) => {
  const classes = ` ${type}${typeof onClick === 'function' ? ' clickable' : ''}`;

  return <div className={`app-button${classes}`} onClick={onClick}>
    <span>{children}</span>
  </div>
};

export default Button;