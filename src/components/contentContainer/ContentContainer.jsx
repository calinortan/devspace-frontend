import React, {Component} from 'react';
import PropTypes from 'prop-types';

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
  children: PropTypes.element
}
export default ContentContainer;