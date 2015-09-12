var express = require('express');
var router = express.Router();

//Router to url "localhost:3000/products"
router.get('/',function(req,res){
    
    res.send("List of products:No products for now.");
});

//Router with parameter "localhost:3000/products/phone"
router.get('/:name',function(req,res){
    //Read the parameter name from request
    res.send(req.params.name);
});

//Router for delete method
router.delete('/:name',function(req,res){
    //Read the parameter name from request
    res.send("Deleted:" + req.params.name);
});

//Router for put method
router.put('/:name',function(req,res){
    //Read the parameter name from request
    res.send("Updated:" + req.params.name);
});

//Router for post method
router.post('/',function(req,res){
    //Read the parameter name from request
    res.send("Added new item");
});

module.exports = router;