/** @jsx React.DOM */

'use strict';

var ChatBox = React.createClass({
  getInitialState: function() {
    return {
      users: []
    }
  },

  componentDidMount: function() {
    this.chatEmitter = this.props.chatProxy;
    this.chatEmitter.connect(this.props.username);
    this.chatEmitter.onMessage(this.addMessage.bind(this));
    this.chatEmitter.onUserConnected(this.userConnected.bind(this));
    this.chatEmitter.onUserDisconnected(this.userDisconnected.bind(this));
  },

  userConnected: function (user) {
    var users = this.state.users;
    users.push(user);
    this.setState({
      users: users
    });
  },

  userDisconnected: function (user) {
    var users = this.state.users;
    users.splice(users.indexOf(user), 1);
    this.setState({
      users: users
    });
  },

  messageHandler: function (message) {
    message = this.refs.messageInput.getDOMNode().value;
    this.addMessage({
      content: message,
      author : this.chatEmitter.getUsername()
    });
    this.chatEmitter.broadcast(message);
  },

  addMessage: function (message) {
    if (message) {
      message.date = new Date();
      this.refs.messagesList.addMessage(message);
    }
  },

  render: function() {
    console.log(this.props);
    console.log(this);
    return (
      <div className="chat-box" ref="root">
        <div className="chat-header"> REACT CHAT</div>
        <div className="chat-content row">
          <MessagesList ref="messagesList"></MessagesList>
          <UsersList users={this.state.users} ref="usersList"></UsersList>
        </div>
        <MessageInput ref="messageInput" messageHandler={this.messageHandler}></MessageInput>
      </div>
    )
  }
});
