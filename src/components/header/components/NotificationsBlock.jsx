import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Badge from 'material-ui/Badge'
import SvgIcon from 'material-ui/SvgIcon';
import CommunicationMessage from 'material-ui/svg-icons/communication/message';
import SocialNotifications from 'material-ui/svg-icons/social/notifications';
import SocialPeople from 'material-ui/svg-icons/social/people';

class NotificationsBlock extends Component {

  renderFriendsNotification() {
    return (
      <Badge
        badgeContent={4}
        badgeStyle={{top: 8, right: 12, backgroundColor: 'coral'}}
      >
        <SocialPeople />
      </Badge>
    );
  }

  renderMessageNotification() {
    return (
      <Badge
        badgeContent={'C'}
        badgeStyle={{top: 8, right: 12, backgroundColor: 'coral'}}
      >
        <CommunicationMessage />
      </Badge>
    );
  }
  renderSocialNotification() {
    return (
      <Badge
        badgeContent={2}
        badgeStyle={{top: 8, right: 12, display: 'none'}}
      >
        <SocialNotifications />
      </Badge>
    );
  }
  render() {
    return (
      <div className='NotificationsBlock'>
        {this.renderFriendsNotification()}
        {this.renderMessageNotification()}
        {this.renderSocialNotification()}
      </div>
    );
  }
}

export default NotificationsBlock;