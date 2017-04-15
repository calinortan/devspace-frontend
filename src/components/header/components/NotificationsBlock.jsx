import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Badge from 'material-ui/Badge'
import CommunicationMessage from 'material-ui/svg-icons/communication/message';
import Popover, { PopoverAnimationVertical } from 'material-ui/Popover';
import SocialNotifications from 'material-ui/svg-icons/social/notifications';
import SocialPeople from 'material-ui/svg-icons/social/people';

class NotificationsBlock extends Component {
  constructor(props) {
    super(props);

    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.showFriendsNotifications = this.showFriendsNotifications.bind(this);
    this.showMessagesNotifications = this.showMessagesNotifications.bind(this);
    this.showSocialNotifications = this.showSocialNotifications.bind(this);

    this.state = {
      isOpen: true,
      popoverContent: null
    }
  }
  renderFriendsNotification() {
    return (
      <button
        className='NotificationsBlock-Button'
        onTouchTap={this.showFriendsNotifications}
        onBlur={this.handleRequestClose}
      >
        <Badge
          badgeContent={4}
          badgeStyle={{ top: 8, right: 12, backgroundColor: 'coral' }}
        >
          <SocialPeople />
        </Badge>
      </button>
    );
  }

  renderMessagesNotification() {
    return (
      <button
        className='NotificationsBlock-Button'
        onTouchTap={this.showMessagesNotifications}
        onBlur={this.handleRequestClose}
      >
        <Badge
          badgeContent={'C'}
          badgeStyle={{ top: 8, right: 12, backgroundColor: 'coral' }}
        >
          <CommunicationMessage />
        </Badge>
      </button>
    );
  }
  renderSocialNotification() {
    return (
      <button
        className='NotificationsBlock-Button'
        onTouchTap={this.showSocialNotifications}
        onBlur={this.handleRequestClose}
      >
        <Badge
          badgeContent={2}
          badgeStyle={{ top: 8, right: 12, display: 'none' }}
        >
          <SocialNotifications />
        </Badge>
      </button>
    );
  }

  handleRequestClose() {
    this.setState({
      isOpen: false,
      popoverContent: null
    });
  }

  showFriendsNotifications() {
    const isToggle = this.state.popoverContent == 'FRIENDS_NOTIFICATIONS'
    this.setState({
      isOpen: !isToggle,
      popoverContent: isToggle ? null : 'FRIENDS_NOTIFICATIONS'
    });
  }

  showMessagesNotifications() {
    const isToggle = this.state.popoverContent == 'MESSAGES_NOTIFICATIONS'
    this.setState({
      isOpen: !isToggle,
      popoverContent: isToggle ? null : 'MESSAGES_NOTIFICATIONS'
    });
  }

  showSocialNotifications() {
    const isToggle = this.state.popoverContent == 'SOCIAL_NOTIFICATIONS'
    this.setState({
      isOpen: !isToggle,
      popoverContent: isToggle ? null : 'SOCIAL_NOTIFICATIONS'
    });
  }

  renderPopover() {
    return (
      <Popover
        open={this.state.isOpen}
        anchorEl={this.element}
        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
        targetOrigin={{ horizontal: 'left', vertical: 'top' }}
        useLayerForClickAway={false}
        animation={PopoverAnimationVertical}
      >
        {this.getPopoverContent()}
      </Popover>
    );
  }
  // onRequestClose={this.handleRequestClose}

  getPopoverContent() {
    switch (this.state.popoverContent) {
      case 'FRIENDS_NOTIFICATIONS':
        return <div>FRIENDS NOTIFICATIONS</div>;
      case 'MESSAGES_NOTIFICATIONS':
        return <div>MESSAGES NOTIFICATIONS</div>;
      case 'SOCIAL_NOTIFICATIONS':
        return <div>SOCIAL NOTIFICATIONS</div>;
      default:
        return null;
    }
  }
  render() {
    return (
      <div className='NotificationsBlock' ref={(el) => { this.element = el; }}>
        {this.renderFriendsNotification()}
        {this.renderMessagesNotification()}
        {this.renderSocialNotification()}
        {this.renderPopover()}
      </div>
    );
  }
}

export default NotificationsBlock;