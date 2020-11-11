const express = require("express");
const app = express();

const Team = require('../models/team');
var exports = module.exports = {};

exports.teams = function(req, res){
    res.render('team/index');
}

exports.create = function(req, res){
    res.render('team/create');
}

exports.tinvite = function(req, res){
    res.render('team/teamInvite');
}

exports.pinvite = function(req, res){
    res.render('team/invitePlayers');
}