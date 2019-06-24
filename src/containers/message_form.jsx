import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { sendNewMessage } from '../actions';


class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    }
  }

  handleChange = (event) => {
    console.log(event.target.value)
    this.setState({
      message: event.target.value
    })
  }

  handleSubmit = (event) => {
    // const url = 'https://wagon-chat.herokuapp.com/react-test-236/messages'
    event.preventDefault();
    console.log('send', this.state.message)
    // send to action, API is to be handled in actions
    this.props.sendNewMessage(this.state.message);
    this.setState({
      message: ''
    })
  }

  render(){
    return (
      <div className="message-form">
        <form className="form" onSubmit={this.handleSubmit}>
          <input className="input" type='text' name='message' placeholder='type your message' value={this.state.message} onChange={this.handleChange}></input>
          <input type="submit" value="Send"></input>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators ({ sendNewMessage }, dispatch);
}

export default connect (null, mapDispatchToProps)(MessageForm);
