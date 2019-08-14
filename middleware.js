"use strict";

const express = require("express");
const router = express.Router();

router.use(function(req, res, next){
    next();
});

module.exports = router;