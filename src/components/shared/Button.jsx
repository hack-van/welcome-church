import * as React from 'react';
import './Button.scss';

const Button = ({ title, onClick }) => {
  return (
    <button type="button" onClick={onClick} className="custom-styled-button">
      {title}
    </button>
  );
};

export default Button;
