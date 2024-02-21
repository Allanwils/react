import React from 'react';
import './Notifications.css';
import PropTypes from 'prop-types';

function NotificationItem({ type, html, value }) {
  return (
    <>
      {type && value ? <li data-notification-type={type}>{value}</li> : null}
      {html ? (
        <li data-urgent dangerouslySetInnerHTML={{ __html: '<u>test</u>' }}></li>
      ) : null}
    </>
  );
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  html: PropTypes.shape({ __html: PropTypes.string }),
  value: PropTypes.string,
};

NotificationItem.defaultProps = {
  type: "default",
};

export default NotificationItem;
