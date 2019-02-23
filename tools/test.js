var slackWrapi = require('../index.js');

var token = process.env.SLACK_API_TOKEN;

var slack = new slackWrapi(token);

// Callback
slack.api.test(function(err, data) {
	if (!err) {
		console.log('slack.api.test', data);
	}
});

// Promise
slack.api.test()
.then((data) => {
	console.log('(Promise) slack.api.test', data);
})
.catch(console.error);

// async/await
(async () => {
	const data = await slack.api.test();
	console.log('(async) slack.api.test', data);
})();


// Auth
slack.auth.test(function(err, data) {
	if (!err) {
		console.log('slack.auth.test', data);
	}
});
