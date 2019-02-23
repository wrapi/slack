# Slack Web API

The **simplest** library for [Slack Web API](https://api.slack.com/web).

> Call Slack Web API endpoints just like functions


[![NPM version](https://img.shields.io/npm/v/slack-wrapi.svg?style=flat)](https://www.npmjs.org/package/slack-wrapi)
[![Build Status](https://travis-ci.org/wrapi/slack.svg?style=flat)](https://travis-ci.org/wrapi/slack)
[![Coverage Status](https://coveralls.io/repos/github/wrapi/slack/badge.svg)](https://coveralls.io/github/wrapi/slack)


## Installation

Install via [npm](https://www.npmjs.org/package/slack-wrapi)

```bash
npm install slack-wrapi --save
```

## Usage

Create a Slack client with the [API token](https://slack.dev/node-slack-sdk/getting_started#getting-a-token-to-use-the-web-api).

```JS
const slackWrapi = require('slack-wrapi');

const slack = new slackWrapi(SLACK_API_TOKEN);

// Now you are ready to make API calls to Slack.
```

Function names match with Slack API endpoints (methods) as per the [documentation](https://api.slack.com/methods).

Just provide parameters and a callback or get back a Promise.

API calls follow this syntax:

`slack.apigroup.action(queryString, callback);`

* `queryString` - (*as required*) API method parameters as key-value pairs.

> If no callback is provided, the function returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) object.

#### Post a message with callback:
```JS
// ES5 Syntax with callback
slack.chat.postMessage({
    "channel": "#general",
    "text": "Hello World!"
  },
  function(err, res) {
    if (!err) {
      console.log('Message posted: ', res.ts);  
    }
  }
)
```
#### Post a message. Get back a Promise:

```JS
// ES2015 Promise
slack.chat.postMessage({
  "channel": "#general",
  "text": "Hello World!"
})
.then((res) => {
  console.log('Message posted: ', res.ts);  
})
.catch(console.error);
```

#### Post a message via async/await:
```JS
// ES2017 async/await
(async () => {
  try {
    const res = await slack.chat.postMessage({
      "channel": "#general",
      "text": "Hello World!"
    });

    console.log('Message posted: ', res.ts);  
  }
  catch(err) {
    console.error(err);
  }
})();
```

Call any [Slack Web API methods](https://api.slack.com/methods) with the client object.

### Examples

#### Lists custom emojis for a team.
```JS
slack.emoji.list(function(err, data) {
  if (!err) {
    console.log(data);
  }
});
```

#### Lists all channels in a Slack team.
```JS
slack.channels.list({exclude_archived:1}, function(err, data) {
  if (!err) {
    console.log(data);
  }
});
```

#### Gets information about a private group.
```JS
slack.groups.info({channel:"G1234567890"}, function(err, data) {
  if (!err) {
    console.log(data);
  }
});
```

#### Adds a reaction to an item.
```JS
slack.reactions.add({
    name: "thumbsup",
    file: "F1234567890",
    file_comment: "Fc1234567890",
    channel:"G1234567890",
    timestamp: "1234567890.123456"
  },
  function(err, data) {
    if (!err) {
      console.log(data);
    }
  }
);
```

#### Gets information about a user.
```JS
slack.users.info({user: "U1234567890"}, function(err, data) {
  if (!err) {
    console.log(data);
  }
});
```

#### Post chat messages to Slack.
```JS
slack.chat.postMessage({
    "channel": "#general",
    "text": "Hello <@u12345678|world>!",
    "username": "Wrapi Bot",
    "as_user": false,
    "parse": "full",
    "link_names": 1,
    "attachments": [{"pretext": "pre-hello", "text": "text-world"}],
    "unfurl_links": true,
    "unfurl_media": false
  },
  function(err, data) {
    if (!err) {
      console.log(data);
    }
  }
)
```

#### Check user's current `Do Not Disturb` settings.
```JS
slack.dnd.info({
    "user": "U1234"
  },
  function(err, data) {
    if (!err) {
      console.log(data);
    }
  }
)
```
## API Methods

### api
* [api.test](https://api.slack.com/methods/api.test)

### apps.permissions
* [apps.permissions.info](https://api.slack.com/methods/apps.permissions.info)
* [apps.permissions.request](https://api.slack.com/methods/apps.permissions.request)

### apps.permissions.resources
* [apps.permissions.resources.list](https://api.slack.com/methods/apps.permissions.resources.list)

### apps.permissions.scopes
* [apps.permissions.scopes.list](https://api.slack.com/methods/apps.permissions.scopes.list)

### apps.permissions.users
* [apps.permissions.users.list](https://api.slack.com/methods/apps.permissions.users.list)
* [apps.permissions.users.request](https://api.slack.com/methods/apps.permissions.users.request)

### apps
* [apps.uninstall](https://api.slack.com/methods/apps.uninstall)

### auth
* [auth.revoke](https://api.slack.com/methods/auth.revoke)
* [auth.test](https://api.slack.com/methods/auth.test)

### bots
* [bots.info](https://api.slack.com/methods/bots.info)

### channels
* [channels.archive](https://api.slack.com/methods/channels.archive)
* [channels.create](https://api.slack.com/methods/channels.create)
* [channels.history](https://api.slack.com/methods/channels.history)
* [channels.info](https://api.slack.com/methods/channels.info)
* [channels.invite](https://api.slack.com/methods/channels.invite)
* [channels.join](https://api.slack.com/methods/channels.join)
* [channels.kick](https://api.slack.com/methods/channels.kick)
* [channels.leave](https://api.slack.com/methods/channels.leave)
* [channels.list](https://api.slack.com/methods/channels.list)
* [channels.mark](https://api.slack.com/methods/channels.mark)
* [channels.rename](https://api.slack.com/methods/channels.rename)
* [channels.replies](https://api.slack.com/methods/channels.replies)
* [channels.setPurpose](https://api.slack.com/methods/channels.setPurpose)
* [channels.setTopic](https://api.slack.com/methods/channels.setTopic)
* [channels.unarchive](https://api.slack.com/methods/channels.unarchive)

### chat
* [chat.delete](https://api.slack.com/methods/chat.delete)
* [chat.getPermalink](https://api.slack.com/methods/chat.getPermalink)
* [chat.meMessage](https://api.slack.com/methods/chat.meMessage)
* [chat.postEphemeral](https://api.slack.com/methods/chat.postEphemeral)
* [chat.postMessage](https://api.slack.com/methods/chat.postMessage)
* [chat.unfurl](https://api.slack.com/methods/chat.unfurl)
* [chat.update](https://api.slack.com/methods/chat.update)

### conversations
* [conversations.archive](https://api.slack.com/methods/conversations.archive)
* [conversations.close](https://api.slack.com/methods/conversations.close)
* [conversations.create](https://api.slack.com/methods/conversations.create)
* [conversations.history](https://api.slack.com/methods/conversations.history)
* [conversations.info](https://api.slack.com/methods/conversations.info)
* [conversations.invite](https://api.slack.com/methods/conversations.invite)
* [conversations.join](https://api.slack.com/methods/conversations.join)
* [conversations.kick](https://api.slack.com/methods/conversations.kick)
* [conversations.leave](https://api.slack.com/methods/conversations.leave)
* [conversations.list](https://api.slack.com/methods/conversations.list)
* [conversations.members](https://api.slack.com/methods/conversations.members)
* [conversations.open](https://api.slack.com/methods/conversations.open)
* [conversations.rename](https://api.slack.com/methods/conversations.rename)
* [conversations.replies](https://api.slack.com/methods/conversations.replies)
* [conversations.setPurpose](https://api.slack.com/methods/conversations.setPurpose)
* [conversations.setTopic](https://api.slack.com/methods/conversations.setTopic)
* [conversations.unarchive](https://api.slack.com/methods/conversations.unarchive)

### dialog
* [dialog.open](https://api.slack.com/methods/dialog.open)

### dnd
* [dnd.endDnd](https://api.slack.com/methods/dnd.endDnd)
* [dnd.endSnooze](https://api.slack.com/methods/dnd.endSnooze)
* [dnd.info](https://api.slack.com/methods/dnd.info)
* [dnd.setSnooze](https://api.slack.com/methods/dnd.setSnooze)
* [dnd.teamInfo](https://api.slack.com/methods/dnd.teamInfo)

### emoji
* [emoji.list](https://api.slack.com/methods/emoji.list)

### files.comments
* [files.comments.add](https://api.slack.com/methods/files.comments.add)
* [files.comments.delete](https://api.slack.com/methods/files.comments.delete)
* [files.comments.edit](https://api.slack.com/methods/files.comments.edit)

### files
* [files.delete](https://api.slack.com/methods/files.delete)
* [files.info](https://api.slack.com/methods/files.info)
* [files.list](https://api.slack.com/methods/files.list)
* [files.revokePublicURL](https://api.slack.com/methods/files.revokePublicURL)
* [files.sharedPublicURL](https://api.slack.com/methods/files.sharedPublicURL)
* [files.upload](https://api.slack.com/methods/files.upload)

### groups
* [groups.archive](https://api.slack.com/methods/groups.archive)
* [groups.create](https://api.slack.com/methods/groups.create)
* [groups.createChild](https://api.slack.com/methods/groups.createChild)
* [groups.history](https://api.slack.com/methods/groups.history)
* [groups.info](https://api.slack.com/methods/groups.info)
* [groups.invite](https://api.slack.com/methods/groups.invite)
* [groups.kick](https://api.slack.com/methods/groups.kick)
* [groups.leave](https://api.slack.com/methods/groups.leave)
* [groups.list](https://api.slack.com/methods/groups.list)
* [groups.mark](https://api.slack.com/methods/groups.mark)
* [groups.open](https://api.slack.com/methods/groups.open)
* [groups.rename](https://api.slack.com/methods/groups.rename)
* [groups.replies](https://api.slack.com/methods/groups.replies)
* [groups.setPurpose](https://api.slack.com/methods/groups.setPurpose)
* [groups.setTopic](https://api.slack.com/methods/groups.setTopic)
* [groups.unarchive](https://api.slack.com/methods/groups.unarchive)

### im
* [im.close](https://api.slack.com/methods/im.close)
* [im.history](https://api.slack.com/methods/im.history)
* [im.list](https://api.slack.com/methods/im.list)
* [im.mark](https://api.slack.com/methods/im.mark)
* [im.open](https://api.slack.com/methods/im.open)
* [im.replies](https://api.slack.com/methods/im.replies)

### migration
* [migration.exchange](https://api.slack.com/methods/migration.exchange)

### mpim
* [mpim.close](https://api.slack.com/methods/mpim.close)
* [mpim.history](https://api.slack.com/methods/mpim.history)
* [mpim.list](https://api.slack.com/methods/mpim.list)
* [mpim.mark](https://api.slack.com/methods/mpim.mark)
* [mpim.open](https://api.slack.com/methods/mpim.open)
* [mpim.replies](https://api.slack.com/methods/mpim.replies)

### oauth
* [oauth.access](https://api.slack.com/methods/oauth.access)
* [oauth.token](https://api.slack.com/methods/oauth.token)

### pins
* [pins.add](https://api.slack.com/methods/pins.add)
* [pins.list](https://api.slack.com/methods/pins.list)
* [pins.remove](https://api.slack.com/methods/pins.remove)

### reactions
* [reactions.add](https://api.slack.com/methods/reactions.add)
* [reactions.get](https://api.slack.com/methods/reactions.get)
* [reactions.list](https://api.slack.com/methods/reactions.list)
* [reactions.remove](https://api.slack.com/methods/reactions.remove)

### reminders
* [reminders.add](https://api.slack.com/methods/reminders.add)
* [reminders.complete](https://api.slack.com/methods/reminders.complete)
* [reminders.delete](https://api.slack.com/methods/reminders.delete)
* [reminders.info](https://api.slack.com/methods/reminders.info)
* [reminders.list](https://api.slack.com/methods/reminders.list)

### rtm
* [rtm.connect](https://api.slack.com/methods/rtm.connect)
* [rtm.start](https://api.slack.com/methods/rtm.start)

### search
* [search.all](https://api.slack.com/methods/search.all)
* [search.files](https://api.slack.com/methods/search.files)
* [search.messages](https://api.slack.com/methods/search.messages)

### stars
* [stars.add](https://api.slack.com/methods/stars.add)
* [stars.list](https://api.slack.com/methods/stars.list)
* [stars.remove](https://api.slack.com/methods/stars.remove)

### team
* [team.accessLogs](https://api.slack.com/methods/team.accessLogs)
* [team.billableInfo](https://api.slack.com/methods/team.billableInfo)
* [team.info](https://api.slack.com/methods/team.info)
* [team.integrationLogs](https://api.slack.com/methods/team.integrationLogs)

### team.profile
* [team.profile.get](https://api.slack.com/methods/team.profile.get)

### usergroups
* [usergroups.create](https://api.slack.com/methods/usergroups.create)
* [usergroups.disable](https://api.slack.com/methods/usergroups.disable)
* [usergroups.enable](https://api.slack.com/methods/usergroups.enable)
* [usergroups.list](https://api.slack.com/methods/usergroups.list)
* [usergroups.update](https://api.slack.com/methods/usergroups.update)

### usergroups.users
* [usergroups.users.list](https://api.slack.com/methods/usergroups.users.list)
* [usergroups.users.update](https://api.slack.com/methods/usergroups.users.update)

### users
* [users.conversations](https://api.slack.com/methods/users.conversations)
* [users.deletePhoto](https://api.slack.com/methods/users.deletePhoto)
* [users.getPresence](https://api.slack.com/methods/users.getPresence)
* [users.identity](https://api.slack.com/methods/users.identity)
* [users.info](https://api.slack.com/methods/users.info)
* [users.list](https://api.slack.com/methods/users.list)
* [users.lookupByEmail](https://api.slack.com/methods/users.lookupByEmail)
* [users.setActive](https://api.slack.com/methods/users.setActive)
* [users.setPhoto](https://api.slack.com/methods/users.setPhoto)
* [users.setPresence](https://api.slack.com/methods/users.setPresence)

### users.profile
* [users.profile.get](https://api.slack.com/methods/users.profile.get)
* [users.profile.set](https://api.slack.com/methods/users.profile.set)

## License

  [MIT](LICENSE)
