import * as React from 'react';
import './InputField.scss';
import classNames from 'classnames';

const InputField = ({
  title,
  placeholder = '',
  isHalfWidth = false,
  type = 'text',
  name = title,
  onInput,
}) => {
  const className = classNames('input-wrapper', { 'half-width': isHalfWidth });
  return (
    <div className={className}>
      <label htmlFor={name}>{title}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onInput={onInput} />
    </div>
  );
};

export default InputField;
