var express = require("express");
var app     = express();
app.set('view engine' , 'ejs');
app.get( "/" , function(req,res){
    res.send("My Name is Raju");
});
app.listen(3000);