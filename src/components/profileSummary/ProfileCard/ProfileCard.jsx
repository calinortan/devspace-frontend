import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';

class ProfileCard extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  static defaultProps = {
    user: {
      avatar: '',
      name: '',
      workplace: ''
    }
  }


  getUserAvatar() {
    return <img
      className={'ProfileCard-Avatar'}
      src={this.props.user.avatar}
      alt="user avatar"
    />;
  }

  getCardAction() {
    const { isOwnProfile, isConnection } = this.props
    if (isOwnProfile) {
      return <RaisedButton label='Edit Profile' primary={true} />;
    }
    if (isConnection) {
      return <RaisedButton label='Chat' primary={true} />;;
    }
    return <RaisedButton label='Connect' primary={true} />;
  }

  render() {
    return <div className={'ProfileCard'}>
      {this.getUserAvatar()}
      <div className={'ProfileCard-UserName'}>
        <span className={'ProfileCard-UserName-Text'}>
          {this.props.user.name}
        </span>
      </div>
      <div className={'ProfileCard-Workplace'}>
        {this.props.user.workplace}
      </div>
      <div className={'ProfileCard-Actions'}>
        {this.getCardAction()}
      </div>
    </div>
  }
}

ProfileCard.propTypes = {
  user: PropTypes.object
}
export default ProfileCard;