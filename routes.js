var fs = require('fs');

var router = function(app, json) {
  app.get('/', function(req, res) {
    // Get JSON from a file
    fs.readFile('./json/home.json', 'utf8', function(err, out) {
      var json;
      if (err) json = {};

      try {
        json = JSON.parse(out);
      }
      catch(e) {
        console.log(e);
        json = {};
      }

      res.render('home', json);
    });
  });
};


module.exports = router;