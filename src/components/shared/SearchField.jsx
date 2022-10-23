import React, { useState } from 'react';
import './SearchField.scss';

const data = [
  { type: 'Denomination', value: 'Mennonite Brethern' },
  { type: 'Language', value: 'English' },
  { type: 'Language', value: 'Chinese (Mandarin)' },
  { type: 'Language', value: 'Chinese (Cantonese)' },
  { type: 'Language', value: 'Korean' },
  { type: 'Language', value: 'Japanese' },
];

const DropdownSearchList = ({ searchValue, handleOnSelect }) => {
  const filteredSearchList = data.filter(({ value }) =>
    value.toLowerCase().includes(searchValue)
  );

  return (
    <div className="drop-down-list">
      {filteredSearchList.map(({ type, value }, index) => (
        <button
          type="button"
          key={index}
          className="drop-down-item"
          onClick={() => handleOnSelect()}
        >{`${type}: ${value}`}</button>
      ))}
    </div>
  );
};

const SearchField = ({ title, placeholder = '' }) => {
  const [isFocused, toggleIsFocused] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="input-wrapper search-input">
      <label>{title}</label>
      <input
        type="text"
        name="username"
        placeholder={placeholder}
        onFocus={() => toggleIsFocused(true)}
        onBlur={() => toggleIsFocused(false)}
        autoComplete="off"
        onChange={(e) => setSearchValue(e.target.value.toLowerCase())}
      />
      {isFocused && searchValue && (
        <DropdownSearchList searchValue={searchValue} />
      )}
    </div>
  );
};

export default SearchField;
