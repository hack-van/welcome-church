import * as React from 'react';
import classNames from 'classnames';

const TextArea = ({ title, placeholder = '', isHalfWidth = false }) => {
  const className = classNames('input-wrapper', { 'half-width': isHalfWidth });
  return (
    <div className={className}>
      <label>{title}</label>
      <textarea cols="30" rows="10" placeholder={placeholder} />
    </div>
  );
};

export default TextArea;
