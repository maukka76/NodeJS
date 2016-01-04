var app = require('express.io')();

app.http().io();

//Handle ready message from client
app.io.route('ready',function(req){
    //Send response to client
    req.io.emit('message',{message:'Server response'})
    
});

app.io.route('new_message',function(req){
    //Send response to client
    console.log("req:" + req.data);
    req.io.broadcast('message',req.data);
    
});

app.get('/',function(req,res){
    
    res.sendfile('index.html');
});

app.listen(7076);