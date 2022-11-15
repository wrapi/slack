'use strict';

var util = require('util');
var wrapi = require('wrapi');

var endpoints = require('./api/slack.json');

function slackWrapi(token) {

  var opts = {
    headers: {
      'User-Agent': 'slack-wrapi',
      'Authorization': 'Bearer ' + token,
    }
  };

  slackWrapi.super_.call(this,
            'https://slack.com/api/',
            endpoints,
            opts);  
};

util.inherits(slackWrapi, wrapi);
module.exports = slackWrapi;
