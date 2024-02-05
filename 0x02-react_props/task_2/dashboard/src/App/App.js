import React from 'react';
import './App.css';
import { getFooterCopy, getFullYear } from '../utils';
import Notifications from '../Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import logo from '../holberton-logo.jpg';

function App() {
  const currentYear = getFullYear();
  const footerCopy = getFooterCopy(true);
  return (
    <React.Fragment>
      <Notifications />
      <div className="App">
        <Header logo={logo} />
        <Login />
        <Footer currentYear={currentYear} footerCopy={footerCopy} />
      </div>
    </React.Fragment>
  );
}

export default App;
