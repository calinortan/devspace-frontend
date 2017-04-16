import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router'


class FriendRequestsContainer extends Component {

  componentDidMount() {
    const { friendRequests, getFriendRequests } = this.props;
    if (friendRequests == null) {
      getFriendRequests();
    }
  }

  renderFriendRequests() {
    const { friendRequests } = this.props;
    if (friendRequests == null) return null;

    return friendRequests.map((friendRequest) => {
      return (
        <li className='FriendRequestsContainer-List-Item' key={friendRequest._id}>
          <Avatar src={friendRequest.from.avatar} />
          <div className='FriendRequestsContainer-List-Item-Name'>
            <Link to={`/${friendRequest.from._id}`}>{friendRequest.from.name}</Link>
          </div>
          <RaisedButton label='Connect' primary={true} style={{ marginRight: '15px' }} />
          <RaisedButton label='Ignore' secondary={true} />
        </li>
      );
    })
  }

  render() {
    console.log(this.props)
    return (
      <div className='FriendRequestsContainer'>
        <ul className='FriendRequestsContainer-List'>
          {this.renderFriendRequests()}
        </ul>
      </div>
    );
  }
}
FriendRequestsContainer.propTypes = {
  friendRequests: PropTypes.array,
  getFriendRequests: PropTypes.func
}
export default FriendRequestsContainer;