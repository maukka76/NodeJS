var express = require('express');
//we use express-session module for handling user sessions
//in our server
var session = require('express-session');
var bodyParser = require('body-parser');

var app = express();

//Here ‘secret‘ is used for cookie handling
app.use(session({ secret: 'secrettokenhere'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/',function(req,res){
    
    res.sendfile('index.html');
});

app.post('/login',function(req,res){
    
    if(req.body.username.length == 0 || req.body.password.length == 0){
       
       res.send('You failed in login!');
    }else{
         
         req.session.kayttaja = req.body.username;
         req.session.salasana = req.body.password;
         res.redirect('/secret');
    }
});

app.get('/secret',function(req,res){
    if(req.session.kayttaja){
        res.sendfile('secret.html');
    }
    else{
        res.send('No URL jumping you hacker!!!');
    }
});

app.get('/logout',function(req,res){
    
    req.session.destroy(function(err){
        
        if(err){
            
            res.send(err);
        }
        else{
            
            res.redirect('/');
        }
    });
});

app.listen(5050);