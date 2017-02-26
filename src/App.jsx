import React, { Component } from 'react';
import Header from './components/header/Header.jsx';
import {db} from './normalizedDb.js';
import LeftSidePanel from './components/leftSidePanel/LeftSidePanel.jsx';
import RightSidePanel from './components/rightSidePanel/RightSidePanel.jsx';
import ContentContainer from './components/contentContainer/ContentContainer.jsx';
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
      <div>
        <Header
          user={db[0]}
          hasNewMessages={true}
          hasNotifications={true}
        />
        <div className={'App-Content'}>
          <LeftSidePanel/>
          <RightSidePanel/>
          <ContentContainer/>
        </div>
      </div>
    );
  }
}
export default App;
