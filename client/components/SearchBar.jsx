// <Wheel author={this.props.author} wheel={this.props.wheel} />
SearchBar = React.createClass({
  render () {
    var headerStyle = {
      backgroundColor: '#ECECEC'
    };
    var formStyle = {
      marginTop: 15,
      marginBottom: -15
    };
    var logoStyle = {
      fontWeight: 'lighter',
      fontSize: '1.7em'
    };
    return (
      <div>
        <div style={headerStyle}>
          <div className="ui grid container">
            <div className="row">
              <div className="ui form">
                <div className="inline fields">
                  <div className="eight wide field" style={formStyle}>
                    <i className='ui brown header' style={logoStyle}>
                      MeteorReactDemo
                    </i>
                    <SearchInput ref="searchInput"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="errMsg"/>
      </div>
    )
  }
});
