import React, { Component } from 'react';
import Header from './components/header/Header.jsx';
import {db} from './normalizedDb.js';
import io from 'socket.io-client';

class App extends Component {
  constructor(props) {
    super(props);
    this.wsConn = io('http://localhost:3000');
  }
  render() {
    return (
      <div>
        <Header 
        user={db[0]} 
        hasNewMessages={true}
        hasNotifications={true}
        />
      </div>
    );
  }
}
export default App;
