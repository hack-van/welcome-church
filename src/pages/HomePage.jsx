import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/shared/Button';

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="box login flex align-center content-center">
      <div className="inner-container">
        <h3>Menu</h3>
        <Button
          title="Create New Request"
          onClick={() => navigate('/registration')}
        />
        <Button title="View Requests" />
      </div>
    </div>
  );
};
export default HomePage;
