/** @jsx React.DOM */

var MessagesList = React.createClass({
  getInitialState: function() {
    return {
      messages: [],
    }
  },

  addMessage: function(message) {
    const messages = this.state.messages;
    const container = this.refs.messageContainer.getDOMNode();
    messages.push(message);
    this.setState({
      messages: messages,
    });
  },

  componentDidUpdate: function() {
    var container = this.refs.messageContainer.getDOMNode();
    container.scrollTop = container.scrollHeight;
  },

  render: function() {
    let messages = this.state.messages.map(function (message) {
      return (
        <ChatMessage message={message}></ChatMessage>
      )
    })

    if (messages.length === 0) {
      messages = [
        <div className="chat-messages-empty">
          No messages yet. You can be first.
        </div>
      ]
    }

    return (
      <div ref="messageContainer" className="chat-messages col-xs-9 col-md-8 col-lg-8">
        {messages}
      </div>
    )
  },
})
