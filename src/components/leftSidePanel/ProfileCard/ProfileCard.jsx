import React, {Component} from 'react';

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
            {this.props.user.name}
        </div>
        <div className={'ProfileCard-Workplace'}>
            {this.props.user.workplace}
        </div>
        {this.getCardButtons()}
    </div>
  }
}

ProfileCard.propTypes = {
  user: React.PropTypes.object
}
export default ProfileCard;