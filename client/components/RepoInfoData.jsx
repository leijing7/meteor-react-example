RepoInfoData = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData () {
    var cri = ClientRepoInfo.findOne({name: this.props.ar.repo});
    var repoInfo = {};
    if (!cri) {
      var handle = Meteor.subscribe('repoInfo', this.props.ar);
      if (handle.ready()) {
        var ri = RepoInfo.findOne({name: this.props.ar.repo});
        var etag = '';
        if (ri) {
          etag = ri.etag;
          ClientRepoInfo.insert(ri);
          repoInfo = ri;
        }
        Meteor.call('retrieveRepoInfo', etag, this.props.ar);
      }
    } else {
      repoInfo = cri;
    }
    return {'repoInfo': repoInfo};
  },
  render () {
    var infoStyle = {
      paddingTop: '50px'
    };
    var numStyle = {
      paddingTop: '50px'
    };
    var date = new Date(this.data.repoInfo.created_at);

    if (_.isEmpty(this.data.repoInfo))
      return <div className="ui active centered loader" />
    return (
      <div>
        <div className="ui grid container">
          <div className='row' style={infoStyle}>
            <div className="eight wide column">
              <h1>{this.data.repoInfo.name}
                (by
                {this.data.repoInfo.author})</h1>
              <p>
                <b>
                  Dscription: &nbsp;
                </b>
                {this.data.repoInfo.description}
              </p>
              <p>
                <b>
                  Created: &nbsp;
                </b>{date.toLocaleDateString()}
              </p>
              <p>
                <b>
                  Language:&nbsp;
                </b>{this.data.repoInfo.language}
              </p>
              <p>
                <b>
                  Homepage:&nbsp;
                </b>
                <a href={this.data.repoInfo.homepage} target="_blank">
                  {this.data.repoInfo.homepage}
                </a>
              </p>
            </div>

            <div className="eight wide column" style={numStyle}>
              <div className="ui statistics">
                <div className="statistic">
                  <div className="value">
                    {Number(this.data.repoInfo.stargazers_count).toLocaleString()}
                  </div>
                  <div className="label">
                    Stars
                  </div>
                </div>
                <div className="statistic">
                  <div className="value">
                    {Number(this.data.repoInfo.forks).toLocaleString()}
                  </div>
                  <div className="label">
                    Forks
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
});
