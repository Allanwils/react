import React from 'react';
import logo from './holberton-logo.jpg';
import './App.css';
import { getFooterCopy, getFullYear } from './utils';
import Notifications from './Notifications';
import Login from './Login/Login';
import Footer from './Footer/Footer';
import Header from './Header/Header';

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
