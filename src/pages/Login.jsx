import * as React from "react";

// import Layout from '../components/Layout';

const Login = () => {
  <>
    <form>
      <label>
        Username:
        <input type="text" name="username" />
      </label>
      <label>
        Password:
        <input type="text" name="password" />
      </label>
      <button>Sign in</button>
      <input type="submit" value="Submit" />
    </form>
  </>;
};

export default Login;
