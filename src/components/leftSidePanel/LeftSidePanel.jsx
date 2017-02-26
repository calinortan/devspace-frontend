import React, {Component} from 'react';
import ProfileCard from './ProfileCard/ProfileCard.jsx';

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
  user: React.PropTypes.object,
  isOwnProfile: React.PropTypes.bool
}
export default LeftSidePanel;