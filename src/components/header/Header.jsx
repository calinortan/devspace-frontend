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

  componentDidMount() {
    if (this.props.user == null) {
      this.props.getLoggedInUser();
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

  renderPrivacyBlock() {
    const { user, signOutUser } = this.props;
    if (user == null) return null;
    return (
      <div className='Header-Block Header-User'>
        <UserPrivacyBlock
          user={user}
          onSignOut={signOutUser}
        />
      </div>
    );
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
        {this.renderPrivacyBlock()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.loggedInUser
});

Header.propTypes = {
  user: PropTypes.object,
  hasNewMessages: PropTypes.bool,
  hasNotifications: PropTypes.bool,
  signOutUser: PropTypes.func,
  getLoggedInUser: PropTypes.func
}
export default connect(mapStateToProps, actions)(Header);