/** @jsx React.DOM */

var UsersList = React.createClass({
  render: function() {
    var users = this.props.users.map(function(user) {
      return (<div className="chat-user">{user}</div>)
    })

    return (
      <div className="col-xs-3 col-md-4 col-lg-4">
        {users}
      </div>
    )
  }
})
