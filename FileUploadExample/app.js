var express = require('express');

//We use formidable module for handling file uploads
var formidable = require('formidable');
//Create new incoming form
var form = new formidable.IncomingForm();
form.uploadDir = __dirname + "/uploads";
form.keepExtensions = true;

var app = express();


app.get('/',function(req,res){
    
    res.sendFile(__dirname + "/index.html");
});


app.post('/api/image',function(req,res){
    
    //This will parse files from request and stores it to uploads
    //folder.
    form.parse(req, function(err, fields, files){
        res.send("back");
    });
});

app.listen(4040);