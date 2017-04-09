import React, { Component } from 'react';
import NotificationAlert from './components/NotificationAlert.jsx'
import UserPrivacyBlock from './components/UserPrivacyBlock.jsx'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions';

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
        <NotificationAlert notificationsNumber={2}></NotificationAlert>
      </div>;
    }
    return <div className='Header-Events-Message'></div>;
  }

  renderNotificationsIcon() {
    if (this.state.hasNotifications) {
      return <div className='Header-Events-Notifications'>
        <NotificationAlert notificationsNumber={3}></NotificationAlert>
      </div>;
    }
    return <div className='Header-Events-Notifications'></div>;
  }

  render() {
    const { user, signOutUser } = this.props
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
          <UserPrivacyBlock
            user={user}
            onSignOut={signOutUser}
          />
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  user: PropTypes.object,
  hasNewMessages: PropTypes.bool,
  hasNotifications: PropTypes.bool,
  signOutUser: PropTypes.func
}
export default connect(null, actions)(Header);