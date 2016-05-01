var expect = require('chai').expect;
var slackWrapi = require('../index');

describe("API Test", function() {
  before(function() {
    var token = process.env.SLACK_API_TOKEN;

    this.client = new slackWrapi(token);
  });

  after(function() {
  });

  describe("Endpoints", function() {
    it("test", function(done) {
      this.client.api.test(function(err, data) {
        expect(err).to.equal(null);
        expect(data).to.deep.equal({ ok: true });
        done();
      });
    });    
  });
});