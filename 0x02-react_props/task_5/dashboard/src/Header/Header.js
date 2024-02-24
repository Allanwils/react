import React from "react";
import './Header.css';


const Header = ({ logo }) => {
  return (
    <div className="App-header">
      <img src={logo} className="App-logo" alt=" Logo" />
      <h1>School dashboard</h1>
    </div>
  );
};

export default Header;