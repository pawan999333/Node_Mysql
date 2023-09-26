/*
var mysql=require('mysql');

var conn=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'codefire',
    database:'nodejs'
})

conn.connect(function(err){
    if(err) throw err;

    console.log("connected...");
    
    // var sql="CREATE DATABASE nodejs";
    // var sql="CREATE TABLE users(id INT AUTO_INCREMENT PRIMARY_KEY, name VARCHAR(255), email VARCHAR(255), password VARCHAR(255))"
    // var sql="INSERT INTO users(name,email,password) VALUES('pawan','pawan123@gmail.com','123456')";
    
    // var sql="INSERT INTO users(name,email,password) VALUES ?";
    // var data = [
    //   ["rohit", "rohit@gmail.com", "rohit"],
    //   ["dhoni", "dhoni@gmail.com", "dhoni"],
    //   ["virat", "virat@gmail.com", "virat"],
    //   ["sachin", "sachin@gmail.com", "sachin"],
    //   ["jadeja", "jadeja@gmail.com", "jadeja"],
    //   ["rahul", "rahul@gmail.com", "rahul"],
    //   ["yuvraj", "yuvraj@gmail.com", "yuvraj"],
    // ];
    // conn.query(sql,[data],function(err,result){


    // var sql="SELECT * FROM users where id=1";
    // var sql="SELECT * FROM users ORDER BY name DESC";
    // var sql = "SELECT * FROM users LIMIT 2,3";
    // var sql="UPDATE users SET name='iron-man',email='avengers@gmail.com',password='avengers' WHERE id=5";
    var sql="DELETE FROM users where name='sachin'";

    conn.query(sql,function(err,result){

 
        if(err) throw err;
        
        // console.log("1 row inserted: " + result.insertId);
        // console.log("affected rows: " + result.affectedRows);
        // console.log(result);
        console.log("rows deleted: " + result.affectedRows);


    })
})
*/

var express=require('express');
var path=require('path');
var cookieParser=require('cookie-parser');
var app=express();


app.use(cookieParser());      //middleware   *************************************************


app.use(express.static('public'));   //middleware   ******************************************************

app.get('/',function(req,res){

    // res.send("<h1>Hello world! pawan sharma iit dhanbad...</h1>");
    res.sendFile(path.join(__dirname+'index.html'))
});


// app.get("/test/:id([0-9]{3})", function (req, res) {
//   res.send("The id is: " + req.params.id);
// });



// app.get("*", function (req, res) {
//   res.send("<h1>Wrong id</h1>");
// });


app.get('/cookieset', function(req,res){

    res.cookie('name','test');
    res.cookie('email','test@gmail.com');

    res.status(200).send("<h1>Cookies Set</h1>");
})


app.get('/cookieget', function(req,res){

    res.status(200).send(req.cookies);
})

var server=app.listen(3330,function(){
    console.log("Go to port number 3330...");
})
