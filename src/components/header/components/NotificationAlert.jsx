import React from 'react';
import PropTypes from 'prop-types';

function NotificationAlert(props)  {
  return (
    <div className='NotificationAlert'>{props.notificationsNumber}</div>
  )
}

NotificationAlert.propTypes = {
  notificationsNumber: PropTypes.number
}
export default NotificationAlert;