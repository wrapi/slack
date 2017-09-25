var slackWrapi = require('../index.js');

var token = process.env.SLACK_API_TOKEN;

var slack = new slackWrapi(token);

slack.api.test(function(err, data) {
	if (!err) {
		console.log(data);
	}
});

slack.auth.test(function(err, data) {
	if (!err) {
		console.log(data);
	}
});
