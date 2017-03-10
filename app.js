var http = require('http');
var app = require('./config/express');  //load express instance, will take care of requests
http.createServer(app).listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
 