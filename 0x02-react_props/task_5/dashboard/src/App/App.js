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
import { getLatestNotification } from "../utils";



function App({isLoggedIn}) {
  const currentYear = getFullYear();
  const footerCopy = getFooterCopy(true);

  // Define the listCourses array
  const listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 },
  ];

  const listNotifications = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    { id: 3, type: "urgent", html: getLatestNotification() },
];
 

  return (
    <React.Fragment>
      <Notifications listNotifications={listNotifications}/>
      <div className="App">
        <Header logo={logo} />
        {isLoggedIn === false? (<Login />) : (<CourseList listCourses={listCourses} />)}
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
