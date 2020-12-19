import React from 'react';

const Button = ({ className, onClick, type = 'button', disabled = false, style, children }) => (
  <button className={className} type={type} onClick={onClick} style={style} disabled={disabled}>
    {children}
  </button>
);

export default Button;
