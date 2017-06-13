import React, { Component } from 'react';
import Header from './components/header/Header.jsx';
import { db } from './normalizedDb.js';
import ProfileSummary from './components/profileSummary/ProfileSummary.jsx';
import RightSidePanel from './components/rightSidePanel/RightSidePanel.jsx';
import ContentContainer from './components/contentContainer/ContentContainer.jsx';
import PropTypes from 'prop-types';
// import io from 'socket.io-client';

class App extends Component {
  constructor(props) {
    super(props);
    // Commenting this until socketio would be properly implemented
    // this.wsConn = io('http://localhost:3000', {
    //   reconnectionAttempts: 3,
    //   reconnectionDelay: 2000
    // });
  }
  render() {
    return (
      <div className='App-Container'>
        <Header
          hasNewMessages={true}
          hasNotifications={true}
        />
        <div className={'App-Content'}>
          <ProfileSummary />
          <ContentContainer>
            {this.props.children}
          </ContentContainer>
          <RightSidePanel />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
  params: PropTypes.object
}
export default App;
