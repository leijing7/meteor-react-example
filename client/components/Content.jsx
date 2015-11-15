Content = React.createClass({
  render () {
    return (
      <div>
        <div className="row">
          <RepoInfoData {...this.props}/>
        </div>
      </div>
    )
  }
});
