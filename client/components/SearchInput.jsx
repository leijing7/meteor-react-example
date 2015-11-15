SearchInput = React.createClass({
  onSearchBtnClick () {
    this.handleSearch();
  },
  onKeyUp (e) {
    //enter key up
    if (e.keyCode === 13) {
      this.handleSearch();
    }
  },
  handleSearch () {
    var res = this.parseURL(ReactDOM.findDOMNode(this.refs.searchInput).value.trim());
    if (!res) {
      alert("Address format error");
      return;
    }console.log(res);
    FlowRouter.go('/ar?' + res.author + '=' + res.repo);
  },
  parseURL (url) {
    if (!/^(https:\/\/github.com\/)([\w-]+)\/([\w._-]+)\/?([\w._\/-]+)?$/.test(url)) {
      console.log('Address is wrong.');
      return false;
    }

    var parser = document.createElement('a');
    parser.href = url;
    var pathnameArr = parser.pathname.split('/');

    if (pathnameArr.length >= 3) {
      var a = pathnameArr[1];
      var r = pathnameArr[2];
      return {author: a, repo: r};
    }
    return false;
  },
  render () {
    var inputWidth = {
      width: '480px'
    };
    return (
      <div>
        <div className="ui action input">
          <input style={inputWidth} ref="searchInput" type="text" placeholder="repo's Github address" onKeyUp={this.onKeyUp}/>
          <button className="ui basic icon button" onClick={this.onSearchBtnClick}>
            <i className="search icon"></i>
          </button>
        </div>
      </div>
    );
  }
});
