import React from 'react';

const Input = ({ value, onChange, children }) => (
  // eslint-disable-next-line jsx-a11y/label-has-associated-control
  <label>
    {children}
    <input type='text' value={value} onChange={(event) => onChange(event.target.value)} />
  </label>
);

export default Input;
