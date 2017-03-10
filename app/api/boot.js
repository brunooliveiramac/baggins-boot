const config = require('config'); 

module.exports = function(app){

		// Arbitrary value used to validate a webhook
		const VALIDATION_TOKEN = (process.env.MESSENGER_VALIDATION_TOKEN) ?
		(process.env.MESSENGER_VALIDATION_TOKEN) :
		config.get('validationToken');

        app.get('/boot', function(req, res){

        		res.json("Hello buddy, you are almost there!"); 
 
        });


        app.get('/webhook', function(req, res) {
		  if (req.query['hub.mode'] === 'subscribe' &&
		      req.query['hub.verify_token'] === VALIDATION_TOKEN) {
		    console.log("Validating webhook");
		    res.status(200).send(req.query['hub.challenge']);
		  } else {
		    console.error("Failed validation. Make sure the validation tokens match.");
		    res.sendStatus(403);          
		  }  
		});
} 