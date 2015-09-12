var express = require('express');
var morgan = require('morgan');
var prods = require('./products/prod_routes');
var app = express();

var port = process.env.PORT || 3000;

//Use morgan HTTP request logger
app.use(morgan('combined'));

//Use our router as middleware
app.use('/products',prods);

/**
  *Set this server to listen port 3000
  */
var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
