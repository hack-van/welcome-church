import * as React from 'react';
import './InputField.scss';
import classNames from 'classnames';

const InputField = ({
  title,
  placeholder = '',
  isHalfWidth = false,
  type = 'text',
}) => {
  const className = classNames('input-wrapper', { 'half-width': isHalfWidth });
  return (
    <div className={className}>
      <label>{title}</label>
      <input type={type} name="username" placeholder={placeholder} />
    </div>
  );
};

export default InputField;
