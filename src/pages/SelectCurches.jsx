import * as React from 'react';
import InputField from '../components/shared/InputField';
import Button from '../components/shared/Button';
import CheckBox from '../components/shared/CheckBox';

const SelectChurches = () => {
  return (
    <div className="box">
      <div className="inner-container">
        <h3>Create a request: Selecting Receiving Churches</h3>
        <p className="description">
          Select churches you wish to send a request to.
        </p>
        <div className="flex">
          <div className="partition">
            <h4>Filter churches based on:</h4>
            <InputField title="Denomination" placeholder="Denomination" />
            <Button title="Filter Churches" />
          </div>
          <div className="partition">
            <h4>Accepted Churches:</h4>
            <CheckBox content="Brentwood Park Church" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectChurches;
