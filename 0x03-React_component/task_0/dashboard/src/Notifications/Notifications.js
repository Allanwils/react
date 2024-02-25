import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';
import NotificationItem from './NotificationItem';
//import { getLatestNotification } from '../utils';
import closeIcon from '../close-icon.png';
import NotificationItemShape from './NotificationItemShape';

function Notifications({ displayDrawer, listNotifications }) {
  const handleButtonClick = () => {
    console.log('Close button has been clicked');
  };

  return (
    <React.Fragment>
      <div className="menuItem">
        <p>Your notifications</p>
      </div>
      {displayDrawer === true ? (
        <div className="Notifications">
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
            <img
              src={closeIcon}
              alt="Close"
              style={{ width: '20px', height: '20px' }}
            />
          </button>
          <p>Here is the list of notifications</p>
          <ul>
            {listNotifications.length === 0 ? (
              <NotificationItem
                type="default"
                value="No new notification for now"
              />
            ) : (
              listNotifications.map((notification, index) => (
                <NotificationItem
                  key={index}
                  type={notification.type}
                  value={notification.value}
                  __html={notification.html}
                />
              ))
            )}
          </ul>
        </div>
      ) : null}
    </React.Fragment>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  // Use the NotificationItemShape prop shape for listNotifications
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;
