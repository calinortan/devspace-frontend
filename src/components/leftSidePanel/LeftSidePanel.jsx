import React, {Component} from 'react';

class LeftSidePanel extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return <section className={'LeftSidePanel'}>
      Panel
    </section>
  }
}

LeftSidePanel.propTypes = {
  user: React.PropTypes.object,
  hasNewMessages: React.PropTypes.bool,
  hasNotifications: React.PropTypes.bool
}
export default LeftSidePanel;