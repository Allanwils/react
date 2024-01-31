import React from 'react';
import './Login.css';

const Login = () => {
    return (
    <React.Fragment>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <form>
          <label htmlFor="email">
            Email:
            <input type="email" name="email" id="email" autoComplete="email" />
          </label>
          <label htmlFor="password">
            Password:
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="current-password"
            />
          </label>
          <button type="submit">OK</button>
        </form>
      </div>
    </React.Fragment>
    );
};

export default Login;