import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ChatUsersList from './components/ChatUsersList.jsx'

class ChatPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  renderChatMessages() {
    const isOpen = false
    if (isOpen) {
      return <div className='ChatPanel-ChatMessages'>

      </div>
    }
  }
  render() {
    return <section className={'ChatPanel'}>
      <div className='ChatPanel-UsersList'>
        <ChatUsersList/>
      </div>
      {this.renderChatMessages()}
    </section>
  }
}

ChatPanel.propTypes = {
  user: PropTypes.object,
  hasNewMessages: PropTypes.bool,
  hasNotifications: PropTypes.bool
}
export default ChatPanel;