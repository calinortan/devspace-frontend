import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Chip from 'material-ui/Chip';
import { green400, grey300, green100 } from 'material-ui/styles/colors';

const messages = [
  {
    text: 'This is the very first message of our conversation',
    userId: '123'
  },
  {
    text: 'I can t give you a better response ',
    userId: '321'
  }
]
class Conversation extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  getMessageChip(text, isOwnMessage) {
    const chipProps = {
      backgroundColor: green400,
      labelColor: grey300,
      style: {
        whiteSpace: 'initial',
        maxWidth: '200px',
        display: 'block'
      }
    }
    return <Chip {...chipProps}>
      {text}
    </Chip>;
  }
  renderMessage(message) {
    const isOwnMessage = message.userId == this.props.currentUserId;
    const additionalClass = isOwnMessage ?
      'Conversation-Messages-Chip-OwnMessage' : 'Conversation-Messages-Chip-ConnectionMessage'
    return <div className={`Conversation-Messages-Chip ${additionalClass}`}>
      {this.getMessageChip(message.text, isOwnMessage)}
    </div>;
  }
  renderMessagesList() {
    return messages.map((msg, index) => {
      return <div key={index}>
        {this.renderMessage(msg)}
      </div>
    });
  }
  render() {
    return <section className={'Conversation'}>
      {this.renderMessagesList()}
    </section>
  }
}

Conversation.propTypes = {
  currentUserId: PropTypes.string,
  otherUserId: PropTypes.string,
}
export default Conversation;