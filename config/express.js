var express = require('express')();
var consign = require('consign');
var bodyParser = require('body-parser');

//express configuration
//middleware - filters 
//make public the express instance
 express.use(bodyParser.json()); // <-- module used in order to popule the body from req


//load all folders with their files .css and apis etc...  			
consign()
		 .include('app/api')
		  //express instace
		 .into(express);

module.exports = express; // <-- Export instance