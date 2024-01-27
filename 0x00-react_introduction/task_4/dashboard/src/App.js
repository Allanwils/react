import logo from './holberton-logo.jpg';
import './App.css';
import { getFooterCopy, getFullYear } from './utils';
import Notifications from './Notifications';

function App() {
  const currentYear = getFullYear();
  const footerCopy = getFooterCopy(true);
  return (
    <div className="App">
      <Notifications />
      <div className="App-header">
        <img src={logo} className="App-logo" alt=" Logo" />
        <h1>School dashboard</h1>
      </div>
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
      <div className="App-footer">
        <p>
          {currentYear}
          {footerCopy}
        </p>
      </div>
    </div>
  );
}

export default App;
