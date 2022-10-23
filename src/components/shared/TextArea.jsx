import * as React from 'react';

const TextArea = ({ title, placeholder = '' }) => {
  return (
    <div className="input-wrapper">
      <label>{title}</label>
      <textarea cols="30" rows="10" placeholder={placeholder} />
    </div>
  );
};

export default TextArea;
