var expect = require('chai').expect;
var slackWrapi = require('../index');
var packageJson = require('../package.json')

describe("API Test", function() {
  var token = process.env.SLACK_API_TOKEN;
  before(function() {
    this.slack = new slackWrapi(token);
  });

  after(function() {
  });

  describe("Endpoints", function() {
    it("simple", function(done) {
      this.slack.api.test(function(err, data) {
        expect(err).to.equal(null);
        expect(data).to.deep.equal({ ok: true, args: {token: token} });
        done();
      });
    });

    it("args", function(done) {
      this.slack.api.test({client: packageJson.name, version:packageJson.version}, function(err, data) {
        expect(err).to.equal(null);
        expect(data).to.deep.equal({ ok: true, args: { token: token, client: packageJson.name, version: packageJson.version } });
        done();
      });
    });

  });
});
