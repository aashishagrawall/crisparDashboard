'use strict';

module.exports = function (app) {
  // User Routes
  var restuarantVerify = require('../controllers/restuarantVerify.server.controller');

  // Setting up the users profile api
   app.route('/api/verify/restuarantPost').post(restuarantVerify.submitForm);

   app.route('/api/verify/restuarantStatus').get(restuarantVerify.getRestuarantStatus);
  // app.route('/api/users').put(users.update);
  // app.route('/api/users/accounts').delete(users.removeOAuthProvider);
  // app.route('/api/users/password').post(users.changePassword);
  // app.route('/api/users/picture').post(users.changeProfilePicture);

  // // Finish by binding the user middleware
  // app.param('userId', users.userByID);
};
