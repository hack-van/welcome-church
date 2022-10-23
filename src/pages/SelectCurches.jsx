import * as React from 'react';
import SearchField from '../components/shared/SearchField';
import Button from '../components/shared/Button';

const SelectChurches = () => {
  return (
    <div className="box">
      <div className="inner-container">
        <h3>Create a request: Selecting Receiving Churches</h3>
        <p className="description">
          Select churches you wish to send a request to.
        </p>
        <div className="flex">
          <SearchField
            title="Search by names, tags, denomination, or languages supported."
            placeholder="Enter search criteria (autofill)"
          ></SearchField>
        </div>
        <div></div>
        <Button title="Review Request" />
      </div>
    </div>
  );
};

export default SelectChurches;
