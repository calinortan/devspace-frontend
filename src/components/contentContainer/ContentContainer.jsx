import React, {Component} from 'react';

class ContentContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <section className={'ContentContainer'}>
      {this.props.children}
    </section>
  }
}

ContentContainer.propTypes = {
  children: React.PropTypes.element
}
export default ContentContainer;