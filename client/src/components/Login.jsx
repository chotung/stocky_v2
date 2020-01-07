import React from 'react';

const Login = () => {
  return (
    <form>
      <label htmlFor="username">
        Username
        <input type="text"/>
      </label>
      <label htmlFor="password">
        Password
        <input type="text"/>
      </label>
      <label htmlFor="email">
        Email
        <input type="text"/>
      </label>
      <input type="submit" value="Submit"/>
    </form>
  );
}

export default Login;
