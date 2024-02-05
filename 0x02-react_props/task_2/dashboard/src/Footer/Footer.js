import React from 'react';
import './Footer.css';


const Footer = ({ currentYear, footerCopy }) => {
  return (
    <div className="App-footer">
      <p>
        Copyright  {currentYear}  {footerCopy}
      </p>
    </div>
  );
};

export default Footer;