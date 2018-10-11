var express = require("express");
var app     = express();
app.set('view engine' , 'ejs');
app.get( "/" , function(req,res){
    console.log("this is console");
    res.send("Welcom to home page");
});
app.get("/raju" , function(req,res){
    console.log("this is console");
    res.send("My Name is Raju");
});
app.listen(process.env.PORT,process.env.IP);