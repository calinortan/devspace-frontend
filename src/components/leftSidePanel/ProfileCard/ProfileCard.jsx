import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ProfileCard extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  getUserAvatar() {
      return <img
        className={'ProfileCard-Avatar'}
        src={this.props.user.avatar}
        alt="user avatar"
        />;
  }

  getCardButtons() {
      return <div className={'ProfileCard-Actions'}>
        <button className={'ProfileCard-Actions-Relation Active-Button'}>Connected</button>
        <button className={'ProfileCard-Actions-Chat Inactive-Button'}>Chat</button>
      </div>
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
        {this.getCardButtons()}
    </div>
  }
}

ProfileCard.propTypes = {
  user: PropTypes.object
}
export default ProfileCard;