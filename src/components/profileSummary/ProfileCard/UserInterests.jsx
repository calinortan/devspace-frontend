import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Chip from 'material-ui/Chip';


class UserInterests extends Component {
  constructor(props) {
    super(props);
  }
  renderList() {
    const { interests } = this.props;
    return interests.map((interest, index) => {
      return <Chip
        key={index}
        style={{margin:4}}
      >
        {interest}
      </Chip>;
    });
  }
  render() {
    return <div className='UserInterests'>
      {this.renderList()}
    </div>;
  }
}


UserInterests.propTypes = {
  interests: PropTypes.arrayOf(String)
}

export default UserInterests;