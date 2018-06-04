//importing modules
var express = require("express");
var mysql = require("mysql");
var mongodb = require("mongodb");
var jwt = require("jwt-simple");
var bodyparser = require("body-parser");
var fs = require("fs");

//create the RESt object or app instance
var app = express();

var router = express.Router();

//enable the CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  //set json MIME type
app.use(bodyparser.json());

//Set form data as false
app.use(bodyparser.urlencoded({extended:false}));

//create the connection object
var connection = mysql.createConnection({host:"localhost",
                                        user:"root",
                                        password:"root",
                                        database:"pocangular2"});
//Connect to Database
connection.connect();
//create the array to store the generated token(in rea time we store token in databse)
var token = [];

//Create the "/login" RESt API
app.post("/login",function(req,res){
    var uname = req.body.uname;
    var upwd = req.body.upwd;
    //match client uname n upwd with database credentials
    connection.query("select * from login_details where uname = '"+uname+"'and upwd = '"+upwd+"'",
    function(err,recordsArray,fields){
        if(recordsArray.length>0){
            var token = jwt.encode({'uname':uname,'upwd':upwd},'hr@nodejs.in')
            token.Push(token);
            res.send({login:'success',token:token});
        }else{
                res.send({login:"failed"});
        }
    });
});

//********************************************************** */

//about RESt API
app.post("/about",function(req,res){
    var token = req.body.token;
    if(token[0] == token){
        connection.query("select * from products ",
        function(err,recordsArray,fields){
                res.send(recordsArray)});
                   }else{
                    res.send("Unauthorised Access");
                }
            });

//********************************************************** */

//Portfolio RESt API
app.post("/portfolio",function(req,res){
    var token = req.body.token;
    if(token[0] == token){
        miniProject.connect("mongodb://localhost:27017/pocAngular2",function(err,db){
            db.collection("products").find().toArray(function(err,array){
                res.send(array);
            });
        });
    }else{
        res.send("Unauthorised access...!");
    }
});

//******************************************************************** */

//Contact RESt API
app.post("/contact",function(req,res){
    var token = req.body.toekn;
    if(token[0] == token){
        fs.readFile("../static/contact.json",function(err,data){
            res.send(data);
        })
    }else{
        res.send("Unauthorised user");
    }
});
module.exports = router;

//Assign Port no.
app.listen(8080);
console.log("Server is listening at port no. 8080");
