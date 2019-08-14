"use strict";

let mongoConnectionHelper = require('../utils/mongodbConnection');

let login = (req, res) => {
   let mongoDB = mongoConnectionHelper.getConnection('mongo');
   let db = mongoDB.db('userInfo');
   let collection = db.collection('register');
   let username = req.body.username || "kanchan11";
   let password = req.body.password || "asd@123";
   collection.find({username : username, password: password}).toArray((error, result) => {
        if(error){
            console.log("User Login :: mongo error :: ", error);
            res.status(500).send("Something went wrong.....");
        }else{
            if(result.length == 0){
                console.log("User Login :: Not valid user credentials");
                res.status(401).send("Please retry with valid credentials");
            }else{
                console.log("User Login :: successful");
                res.status(200).send("Login is successful");
            }
        }
   });
};

module.exports = {
    login : login
}