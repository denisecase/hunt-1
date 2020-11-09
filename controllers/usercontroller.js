// Create express app
const express = require("express");
const app = express();

const User = require('../models/user');

const async = require('async');

exports.loginPage = function(req, res) {
    res.render('user/login');
}

exports.register = function(req, res) {
    res.render('user/signuppage');
}

exports.forgot1 = function(req, res) {
    res.render('user/forgotemail');
}

exports.forgot2 = function(req, res) {
    res.render('user/forgotcode');
}

exports.forgot3 = function(req, res) {
    res.render('user/newpassword');
}

exports.logout = function (req, res) {
    req.session.destroy(function (err) {
        res.redirect('/');
    });
}