"use strict";

const express = require("express");
let app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

let middleware = require('./middleware');
let userRoutes = require('./routes/userRoutes');
let mongoConnection = require('./utils/mongodbConnection');

app.get('/', function(req, res){
   res.send(200);
});

app.use(bodyParser.json({
    limit: '2mb'
}));
app.use(bodyParser.urlencoded({
    limit: '2mb',
    extended: true
}));
app.use(cookieParser());

//middleware
app.use(middleware);

//user routes
app.use(userRoutes);

app.listen(3000, () => {
    console.log("Server is running on 3000");
});