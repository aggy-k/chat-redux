import React, { Component } from 'react';

class Message extends Component {
  render() {
    return(
      <div className="message">
        <p>{this.props.message.author}: {this.props.message.content}</p>
      </div>
    )
  }
}

export default Message;
