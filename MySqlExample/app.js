var express = require('express');
var queries = require('./queries');

var app = express();
//Install this with command npm install mysql --save

app.get('/data',function(req,res){
    
    queries.getEmployeeIdProc(req,res);
});


app.listen(3000);