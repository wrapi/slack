var slackWrapi = require('../index.js');

var token = process.env.SLACK_API_TOKEN;

var client = new slackWrapi(token);

client.api.test(function(err, data) {
	if (!err) {
		console.log(data);
	}
});

client.auth.test(function(err, data) {
	if (!err) {
		console.log(data);
	}
});

