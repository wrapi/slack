'use strict';

var wrapi = require('wrapi');

var endpoints = require('./api/slack.json');

function slackWrapi(token) {

  var opts = {
    qs: {
      token: token
    },
    headers: {
      'User-Agent': 'slack-wrapi'
    }
  };

  wrapi.call(this,
            'https://slack.com/api/',
            endpoints,
            opts);  
};

slackWrapi.prototype = Object.create(wrapi.prototype);
slackWrapi.prototype.constructor = slackWrapi;

module.exports = slackWrapi;
