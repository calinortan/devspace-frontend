import React, {Component} from 'react';

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
  user: React.PropTypes.object,
  hasNewMessages: React.PropTypes.bool,
  hasNotifications: React.PropTypes.bool
}
export default RightSidePanel;