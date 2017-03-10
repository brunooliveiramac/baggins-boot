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
		

		app.post('/webhook', function (req, res) {
		  var data = req.body;

		  // Make sure this is a page subscription
		  if (data.object === 'page') {

		    // Iterate over each entry - there may be multiple if batched
		    data.entry.forEach(function(entry) {
		      var pageID = entry.id;
		      var timeOfEvent = entry.time;

		      // Iterate over each messaging event
		      entry.messaging.forEach(function(event) {
		        if (event.message) {
		          receivedMessage(event);
		        } else {
		          console.log("Webhook received unknown event: ", event);
		        }
		      });
		    });

		    // Assume all went well.
		    //
		    // You must send back a 200, within 20 seconds, to let us know
		    // you've successfully received the callback. Otherwise, the request
		    // will time out and we will keep trying to resend.
		    res.sendStatus(200);
		  }
		});
		  
		function receivedMessage(event) {
		  // Putting a stub for now, we'll expand it in the following steps
		  console.log("Message data: ", event.message);
		}
} 