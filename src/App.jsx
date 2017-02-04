import React, { Component } from 'react';
import Header from './components/header/Header.jsx';
import {db} from './normalizedDb.js';

class App extends Component {
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
