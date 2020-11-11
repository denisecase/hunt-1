var express = require('express');
var router = express.Router();

// Require controller modules.
const player_controller = require('../controllers/playerController');
const team_controller = require('../controllers/teamcontroller');
const user_controller = require('../controllers/usercontroller');

/// USER ROUTES ///

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('user/loginpage', { title: 'Login Page' });
});

// GET Login as home page.
router.get('/user/login',user_controller.login);

router.get('/user/register',user_controller.register);

router.get('/user/forgot1',user_controller.forgot1);

router.get('/user/forgot2',user_controller.forgot2);

router.get('/user/newpass',user_controller.forgot3);

router.get('/dashboard',user_controller.dashboard);

module.exports = router;