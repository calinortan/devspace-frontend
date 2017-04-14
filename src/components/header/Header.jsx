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

  renderMessageIcon() {
    if (this.state.hasNewMessages) {
      return <div className='Header-Events-Message'>
        <NotificationAlert notificationsNumber={2}></NotificationAlert>
      </div>;
    }
    return <div className='Header-Events-Message'></div>;
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
    return (
      <div className='Header-Block Header-Events'>
        < NotificationsBlock />
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