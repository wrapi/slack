var request = require('request');
var cheerio = require('cheerio');
var url = require('url');

var page = 'https://api.slack.com/methods';

var endpoints = {};

request(
  page, 
  function (error, response, html) {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);
      $('a .bold,.block', '.card').each(
        function(i, element) {
          var a = $(this);
          var td = $(a.parent().next());
          var key = a.text().trim();
          var group = key.split('.')[0];
          //console.log(group, ':', a.text(), ' ', td.text(), ' - ', a.attr('href'));
          endpoints[a.text().trim()] = {
            path: a.text().trim(),
            desc: td.text(),
            doc: url.resolve(page, a.attr('href'))
          }
        }
      );

      generateJson(endpoints);
      generateDoc(endpoints);
    }
  }
);

function generateJson(endpoints) {
  var json = {};

  for (k in endpoints) {
    json[k] = {
      "method": "GET",
      "path": endpoints[k].path
    }
  }

  console.log(JSON.stringify(json, null, "\t"));
}

function generateDoc(endpoints) {
  var json = {};

  //console.log('%s | %s', 'Method', 'Description');
  //console.log('%s | %s', '------', '-----------');
  for (k in endpoints) {
    var g = k.split('.');
    g.pop();
    g = g.join('.');
    if (!json[g]) {
      json[g] = {};
      console.log('\n### %s', g);
      //console.log(' **%s**| ', g);
    }
    console.log('* [%s](%s)', k, endpoints[k].doc);
    //console.log('[%s](%s) | %s', k, endpoints[k].doc, endpoints[k].desc)
  }
}