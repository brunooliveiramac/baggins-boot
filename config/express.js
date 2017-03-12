var express = require('express');
var app = express();
var consign = require('consign');
var bodyParser = require('body-parser');

//express configuration
//middleware - filters 
//make public the express instance
app.use(bodyParser.json()); // <-- module used in order to popule the body from req
app.use(express.static('./public')); //share public folder, all project resource etc..


//load all folders with their files .css and apis etc...  			
consign()
		 .include('app/api')
		  //express instace
		 .into(app);

module.exports = app; // <-- Export instance