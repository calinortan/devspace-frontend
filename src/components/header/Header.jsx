import React, {Component} from 'react';
import NotificationAlert from './components/NotificationAlert.jsx'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasNewMessages: props.hasNewMessages,
      hasNotifications: props.hasNotifications
    }
  }

  renderMessageIcon() {
    if (this.state.hasNewMessages) {
      return <div className='Header-Events-Message'>
        <NotificationAlert notificationsNumber = {2}></NotificationAlert>
      </div>;
    }
    return <div className='Header-Events-Message'></div>;
  }

  renderNotificationsIcon() {
    if (this.state.hasNotifications) {
      return <div className='Header-Events-Notifications'>
        <NotificationAlert notificationsNumber = {3}></NotificationAlert>
      </div>;
    }
    return <div className='Header-Events-Notifications'></div>;
  }

  render() {
    return (
      <div className='Header'>
        <div className='Header-Text Header-Block'>
          Devspace
        </div>
        <div className='Header-Block Header-Events'>
          <div className='Header-Events-AddFriends'></div>
          {this.renderMessageIcon()}
          {this.renderNotificationsIcon()}
        </div>
        <div className='Header-Block Header-User'>
            
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  user: React.PropTypes.object,
  hasNewMessages: React.PropTypes.bool,
  hasNotifications: React.PropTypes.bool
}
export default Header;