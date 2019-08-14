"use strict";

const express = require("express");
const userRouter = express.Router();

let loginController = require('../controllers/login');
let registerController = require('../controllers/register');

//API to get login
userRouter.post('/login', function(req, res){
    loginController.login(req, res);
});

//API to register user
userRouter.post('/register', function(req, res){
    registerController.register(req, res);
});

module.exports = userRouter;