import React from 'react';
import './Notifications.css';
import { getLatestNotification } from './utils';
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
          top: 0,
          right: 0,
          background: 'none',
          border: 'none',
          cursor: 'pointer',
        }}
        aria-label="Close"
        onClick={handleButtonClick}
      >
        {/* Image element */}
        <img src={closeIcon} alt="Close" />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li
          data-priority="urgent"
          dangerouslySetInnerHTML={{ __html: `${getLatestNotification()}` }}
        ></li>
      </ul>
    </div>
  );
}
export default Notifications;