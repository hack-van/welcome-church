import * as React from 'react';
import InputField from '../components/shared/InputField';
import Button from '../components/shared/Button';
import './Login.scss';

const Login = () => {
  return (
    <div className="box box-shadow login flex-center">
      <div className="inner-container">
        <h3>Login</h3>
        <InputField title="User name" placeholder="Enter user username" />
        <InputField title="Password" placeholder="Enter your passord" />
        <Button title="Sign In" />
      </div>
    </div>
  );
};

export default Login;
