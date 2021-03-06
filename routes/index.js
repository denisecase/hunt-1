var express = require('express');
var router = express.Router();

// Require controller modules.
const competition_controller = require('../controllers/competitionController');
const player_controller = require('../controllers/playerController');
const quest_controller = require('../controllers/questController');
const team_controller = require('../controllers/teamcontroller');
const user_controller = require('../controllers/usercontroller');

/// USER ROUTES ///

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('user/loginpage', { title: 'Login Page' });
});

// GET Login as home page.
router.get('/user/login', user_controller.login);

router.get('/user/register', user_controller.register);

router.get('/user/forgot1', user_controller.forgot1);

router.get('/user/forgot2', user_controller.forgot2);

router.get('/user/newpass', user_controller.forgot3);

router.get('/user/index', user_controller.userlist);

router.get('/dashboard', user_controller.dashboard);

router.get('/user/newuser', user_controller.newuser);

router.post('/user/adduser', user_controller.adduser);


/// Team Routes ///

router.get('/team/index', team_controller.teamlist);

router.get('/team/create', team_controller.create);

router.post('/team/addTeam', team_controller.addTeam);

router.get('/team/tinvite', team_controller.tinvite);

router.get('/team/pinvite', team_controller.pinvite);

/// Quest Routes ///

/// Competition Routes ///



module.exports = router;