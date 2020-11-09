const express = require('express');
const router = express.Router();

// Require controller modules.
const player_controller = require('../controllers/playerController');
const team_controller = require('../controllers/teamcontroller');
const user_controller = require('../controllers/usercontroller');

/// USER ROUTES ///

// GET Login as home page.
router.get('/',user_controller.login)