NotFoundModal = React.createClass({
  componentDidMount () {
    $('#msgModal').modal({
      onDeny () {
        window.location.href = '/';
      }
    }).modal('show');
  },
  render () {
    return (
      <div className="ui small modal" id="msgModal">
        <div className="negative header">
          Error 404
        </div>
        <div className="content">
          <div className="description">
            <h1>Sorry, we couldn't find the repo.</h1>
          </div>
        </div>
        <div className="actions">
          <div className="ui deny button">Close</div>
        </div>
      </div>
    )
  }
});
