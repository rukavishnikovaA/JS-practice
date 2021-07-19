/** @jsx React.DOM */

$(function() {
  function initChat(username, container) {
    React.renderComponent(
      <ChatBox chatProxy={new ChatEmmiter()} username={username}></ChatBox>,
      container
    );
  }

  $('#connect-btn').click(() => {
    const username = $('#username-input').val();
    const container = $('#container')[0];
    initChat(username, container);
    console.log(`Chat initialized with username: ${username}`)
  });
})
