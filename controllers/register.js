"use strict";

let mongoConnectionHelper = require('../utils/mongodbConnection');

let register = (req, res) => {
   let mongoDB = mongoConnectionHelper.getConnection('mongo');
   let db = mongoDB.db('userInfo');
   let collection = db.collection('register');
   let userInfo = {};
   let username = req.body.username || "kanchan123";
   let email = req.body.email || "kanchan1@gmail.com";
   let mobile = req.body.mobile || "1234567891";
   userInfo.name = req.body.name || "Kanchan";
   userInfo.address = req.body.address || "Andheri West, Mumbai-102";
   userInfo.email = email;
   userInfo.mobile = mobile;
   userInfo.gender = req.body.gender || "F";
   userInfo.username =  username;
   userInfo.password = req.body.password || "qwe@123";

   //keeping username, mobile and email as unique combination wrt every user
   collection.find({$or:[{username : username}, {email: email}, {mobile: mobile}]}).toArray((error, result) => {
        if(error){
            console.log("User Registration :: error :: ", error);
            res.status(500).send("Something went wrong.....");
        }else{
            if(result.length >= 1){
                console.log("User Registration :: Existing User Info");
                res.status(401).send("Existing user...Try with different username, email or mobile");
            }else{
                collection.insertOne(userInfo, (error, result) => {
                    if(error){
                        console.log("User Registration :: mongo error :: ", error);
                        res.status(500).send("Something went wrong.....");
                    }else{
                        console.log("User Registration :: successful");
                        res.status(200).send("User is registered successfully");
                    }
                });
            }
        }
   });
};

module.exports = {
    register : register
}