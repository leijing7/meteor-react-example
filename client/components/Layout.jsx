Layout = React.createClass({
  render () {
    return (
      <div>
        <SearchBar/>
        <section>{this.props.content}</section>
      </div>
    );
  }
});
