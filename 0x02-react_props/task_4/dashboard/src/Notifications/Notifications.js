import React from 'react';
import './Notifications.css';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils';
import closeIcon from '../close-icon.png';
import PropTypes from 'prop-types';

function Notifications({displayDrawer}) {
  const handleButtonClick = () => {
    console.log('Close button has been clicked');
  };
  return (
    <React.Fragment>
    <div className="menuItem">
      <p>Your notifications</p>
    </div>
    {displayDrawer === true? (<div className="Notifications">
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
        <NotificationItem type="default" value="New course available" />
        <NotificationItem  type="urgent" value="New resume available" />
        <NotificationItem  type="urgent" __html={getLatestNotification()} />
      </ul>
    </div>) : null}
    </React.Fragment>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
  displayDrawer: false,
};


export default Notifications;