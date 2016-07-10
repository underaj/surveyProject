var User = require('./user.model');

module.exports = {
  signup: function(req, res) {
    var username = req.body.username;
    var password = req.body.password;
    User.findOne( {username: username} )
      .exec(function(err, user) {
        if (err) {
          console.log(err); 
        } else if (user) {
          res.send(req.user);
        } else {
          user = new User( {username: username, password: password} );
          user.save(function(err, result) {
            if (err) {            
              console.log(err);
            } else {
              req.login(user, function(err) { 
                if (err) {
                  console.log('error');
                } else {
                  return res.send(req.user);               
                }
              });
            }
          });
        }
      });
  }
};
