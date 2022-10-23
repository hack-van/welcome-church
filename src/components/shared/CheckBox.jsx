import React from 'react';
import './CheckBox.scss';

const CheckBox = ({ name, content, isChecked = false }) => {
  return (
    <div className="flex align-center checkbox">
      <input type="checkbox" name={name} value={isChecked} />
      <label htmlFor={name}>{content}</label>
    </div>
  );
};

export default CheckBox;
