import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setMessages } from '../actions';
import Message from './message';

class MessageList extends Component {
  componentWillMount() {
    this.props.setMessages();
  }

  componentDidMount() {
    this.refresher = setInterval(this.fetchMessages, 5000);
  }

  // componentDidUpdate() {
  //   this.list.scrollTop = this.list.scrollHeight;
  // }

  componentWillUnmount() {
    clearInterval(this.refresher);
  }

  render() {
    return (
      <div className="message-list">
        {this.props.messages.map((message, index) => {
          return <Message message={message} key={index} />
        })}
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    messages: state.messages
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setMessages }, dispatch);
}

export default connect (mapStateToProps, mapDispatchToProps)(MessageList);
