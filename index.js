var express = require('express'),
    fs =      require('fs'),
    dust =    require('dustjs-linkedin'),
    cons =    require('consolidate'),
    router =  require('./routes');


var app =     express();

// Assign the dust engine to .dust files.
app.engine('dust', cons.dust);
app.set('view engine', 'dust');
app.set('views', './views');

router(app);

var server = app.listen(3001, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Dust app listening on: http://%s:%s", host, port);
});