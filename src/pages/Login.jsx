import * as React from 'react';
import InputField from '../components/shared/InputField';
import Button from '../components/shared/Button';
import './Login.scss';

const Login = ({ handleUserLogin }) => {
  return (
    <div className="box login flex align-center content-center">
      <div className="inner-container">
        <h3>Login</h3>
        <InputField title="User name" placeholder="Enter user username" />
        <InputField
          title="Password"
          placeholder="Enter your passord"
          type="password"
        />
        <Button title="Sign In" onClick={() => handleUserLogin(true)} />
      </div>
    </div>
  );
};

export default Login;
