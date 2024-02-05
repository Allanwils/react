import React from 'react';
import './Notifications.css';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils';
import closeIcon from './close-icon.png';

function Notifications() {
  const handleButtonClick = () => {
    console.log('Close button has been clicked');
  };
  return (
    <div className="Notifications">
      {/* Button with inline styling */}
      <button
        style={{
          position: 'absolute',
          top: 20,
          right: 20,
          background: 'none',
          border: 'none',
          cursor: 'pointer',
        }}
        aria-label="Close"
        onClick={handleButtonClick}
      >
        {/* Image element */}
        <img
          src={closeIcon}
          alt="Close"
          style={{ width: '20px', height: '20px' }}
        />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <NotificationItem/>
        <NotificationItem/>
        <NotificationItem/>
      </ul>
    </div>
  );
}
export default Notifications;