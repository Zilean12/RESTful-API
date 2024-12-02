const passport = require('passport');

exports.authenticateJWT = passport.authenticate('jwt', { session: false });

exports.authenticateGoogle = passport.authenticate('google', {
  scope: ['profile', 'email']
});

exports.googleCallback = passport.authenticate('google', {
  session: false,
  failureRedirect: '/login'
});