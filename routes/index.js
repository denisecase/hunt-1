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

router.get('/user/forgotemail',user_controller.forgot1);

router.get('/user/forgotcode',user_controller.forgot2);

router.get('/user/newpassword',user_controller.forgot3);



module.exports = router;