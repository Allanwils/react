import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import { getFooterCopy, getFullYear } from '../utils';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import logo from '../holberton-logo.jpg';
import CourseList from '../CourseList/CourseList';


function App({isLoggedIn}) {
  const currentYear = getFullYear();
  const footerCopy = getFooterCopy(true);
  return (
    <React.Fragment>
      <Notifications />
      <div className="App">
        <Header logo={logo} />
        {isLoggedIn === false? (<Login />) : (<CourseList />)}
        <Footer currentYear={currentYear} footerCopy={footerCopy} />
      </div>
    </React.Fragment>
  );
}


App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

App.defaultProps = {
  isLoggedIn: false,
};

export default App;
