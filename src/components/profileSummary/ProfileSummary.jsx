import React, { Component } from 'react';
import ProfileCard from './ProfileCard/ProfileCard.jsx';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { withRouter } from 'react-router';

class ProfileSummary extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const { getCurrentProfileUser, params } = this.props;
    getCurrentProfileUser(params.user_id);
  }

  componentWillUpdate(nextProps) {
    const { getCurrentProfileUser, params } = this.props;
    const nextUserId = nextProps.params.user_id;
    if (nextUserId !== params.user_id) {
      getCurrentProfileUser(nextUserId);
    }
  }
  render() {
    return <section className={'ProfileSummary'}>
      <ProfileCard
        user={this.props.user}
      />
    </section>
  }
}

const mapStateToProps = (state) => ({
  user: state.profile.user
});

ProfileSummary.propTypes = {
  user: PropTypes.object,
  isOwnProfile: PropTypes.bool
}
export default withRouter(connect(mapStateToProps, actions)(ProfileSummary));