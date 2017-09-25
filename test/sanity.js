var expect = require('chai').expect;
var slackWrapi = require('../index');
var package = require('../package.json')

describe("API Test", function() {
  before(function() {
    var token = process.env.SLACK_API_TOKEN;

    this.slack = new slackWrapi(token);
  });

  after(function() {
  });

  describe("Endpoints", function() {
    it("simple", function(done) {
      this.slack.api.test(function(err, data) {
        expect(err).to.equal(null);
        expect(data).to.deep.equal({ ok: true });
        done();
      });
    });

    it("args", function(done) {
      this.slack.api.test({client: package.name, version:package.version}, function(err, data) {
        expect(err).to.equal(null);
        expect(data).to.deep.equal({ ok: true, args: { client: package.name, version: package.version } });
        done();
      });
    });

  });
});
