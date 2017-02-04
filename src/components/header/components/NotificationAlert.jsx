import React from 'react';

function NotificationAlert(props)  {
  return (
    <div className='NotificationAlert'>{props.notificationsNumber}</div>
  )
}

NotificationAlert.propTypes = {
  notificationsNumber: React.PropTypes.number
}
export default NotificationAlert;