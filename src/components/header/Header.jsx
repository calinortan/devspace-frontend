import React, { Component } from 'react';
import UserPrivacyBlock from './components/UserPrivacyBlock.jsx'
import NotificationsBlock from './components/NotificationsBlock.jsx'
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

  renderNotificationsBlock() {
    const { friendRequests, getFriendRequests, loadingNotifications, acceptFriendRequest } = this.props;
    return (
      <div className='Header-Block Header-Events'>
        < NotificationsBlock
          friendRequests={friendRequests}
          getFriendRequests={getFriendRequests}
          loadingNotifications={loadingNotifications}
          acceptFriendRequest={acceptFriendRequest}
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
        {this.renderNotificationsBlock()}
        {this.renderPrivacyBlock()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.loggedInUser,
  friendRequests: state.notifications.friendRequests,
  loadingNotifications: state.notifications.loadingNotifications
});

Header.propTypes = {
  user: PropTypes.object,
  hasNewMessages: PropTypes.bool,
  hasNotifications: PropTypes.bool,
  signOutUser: PropTypes.func,
  getLoggedInUser: PropTypes.func,
  getFriendRequests: PropTypes.func,
  friendRequests: PropTypes.array,
  loadingNotifications: PropTypes.bool,
  acceptFriendRequest: PropTypes.func
}
export default connect(mapStateToProps, actions)(Header);