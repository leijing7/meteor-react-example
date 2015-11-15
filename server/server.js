console.log("Started server");

Meteor.publish('repoInfo', function(ar) {
  return RepoInfo.find({
    name: ar.repo
  });
});

var github = new GitHub({
  version: "3.0.0",
  debug: false,
  protocol: "https",
  host: "api.github.com", 
  timeout: 5000,
  headers: {
    "user-agent": "Meteor-React-App"
  }
});
// if you login, you can get 5000 times access to the api per hour
// github.authenticate({
//   type: "basic",
//   username: your_user_name,
//   password: your_password
// });

Meteor.methods({
  retrieveRepoInfo(etag, ar) {
    github.repos.get({
      headers: {
        "If-None-Match": etag
      },
      user: ar.author,
      repo: ar.repo
    }, Meteor.bindEnvironment(function(err, res) {
      //if the conditional request doesn't change, only meta return length is 1;
      //otherwise with other info
      if (Object.keys(res).length > 1) {
        RepoInfo.upsert(ar, res, function(err, insertedID) {
          if (err) {
            console.log("Inserted repo error: ", err);
          } else {
            console.log('Inserted repo id:', insertedID);
          }
        });
      }
    }))
  }
});
