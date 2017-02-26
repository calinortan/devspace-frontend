import React, {Component} from 'react';

class ContentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return <section className={'ContentContainer'}>
      <div className={'longContentTest'}>Content</div>
    </section>
  }
}

ContentContainer.propTypes = {
  user: React.PropTypes.object,
  hasNewMessages: React.PropTypes.bool,
  hasNotifications: React.PropTypes.bool
}
export default ContentContainer;