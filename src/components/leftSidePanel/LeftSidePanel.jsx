import React, {Component} from 'react';
import ProfileCard from './ProfileCard/ProfileCard.jsx';
import PropTypes from 'prop-types';

class LeftSidePanel extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return <section className={'LeftSidePanel'}>
      <ProfileCard 
        user={this.props.user}
      />
    </section>
  }
}

LeftSidePanel.propTypes = {
  user: PropTypes.object,
  isOwnProfile: PropTypes.bool
}
export default LeftSidePanel;