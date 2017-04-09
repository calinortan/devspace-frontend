import React, {Component} from 'react';
import PropTypes from 'prop-types';

class RightSidePanel extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return <section className={'RightSidePanel'}>
      Panel
    </section>
  }
}

RightSidePanel.propTypes = {
  user: PropTypes.object,
  hasNewMessages: PropTypes.bool,
  hasNotifications: PropTypes.bool
}
export default RightSidePanel;