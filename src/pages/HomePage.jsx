import * as React from 'react';
import Button from '../components/shared/Button';

const HomePage = () => {
  return (
    <div className="box box-shadow login flex-center">
      <div className="inner-container">
        <h3>Menu</h3>
        <Button title="Create New Request" />
        <Button title="View Requests" />
      </div>
    </div>
  );
};
export default HomePage;
