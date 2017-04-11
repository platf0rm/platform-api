'use strict';

module.exports = function(Account) {

  //returns true if email not exists, else return error.
  Account.checkEmail = (email, callback) => {
    const regEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // jshint ignore:line

    if (!regEx.test(email)) {
      return callback('ERROR_EMAIL_INVALID');
    }

    Account.findOne({where: {email: email}}, (error, account) => {
      if (error) { return callback(error); }
      if (account) {
        return callback('ERROR_EMAIL_EXISTS');
      }
      callback(null, true);
    });
  };

  Account.signup = (userInfo, callback) => {
    Account.checkEmail(userInfo.email, (err, res) => {
      if (err) { return callback(err, null); }

      userInfo.username = userInfo.email;
      userInfo.created = new Date();
      userInfo.emailVerified = false;

      Account.create(userInfo, callback);
    });
  };

  Account.remoteMethod('signup', {
    http: { path: '/signup', verb: 'post' },
    accepts: { arg: 'data', type: 'object', http: { source: 'body' } },
    returns: { arg: 'data', type: 'object', root: true },
    description: 'inserts user info'
  });
};
