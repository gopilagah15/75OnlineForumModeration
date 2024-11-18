import React from 'react';

const NotificationList = ({ notifications }) => {
  return (
    <div style={{ marginTop: '20px' }}>
      <h2>User Notifications</h2>
      {notifications.length === 0 && <p>No notifications.</p>}
      <ul>
        {notifications.map((notification, index) => (
          <li key={index}>{notification}</li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationList;
