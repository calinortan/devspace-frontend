import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DocumentsList from './documentsList/DocumentsList.jsx';

class WallContent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className={'WallContent'}>
      <DocumentsList />
    </div>
  }
}

WallContent.propTypes = {
  children: PropTypes.element
}
export default WallContent;