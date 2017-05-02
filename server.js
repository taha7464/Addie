
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({extended: false}));

app.post("/message", function (request, response) {
  console.log(request.body);
  response.send("<Response><Message>Hello</Message></Response>")
});

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});


//
// var http = require('http');
// var express = require('express');
// var twilio = require('twilio');
//
// var app = express();
//
// app.post('/sms', function(req, res) {
// //  var twiml = new twilio.TwimlResponse();
//   twiml.message('The Robots are coming! Head for the hills!');
//   res.writeHead(200, {'Content-Type': 'text/xml'});
//   res.end(twiml.toString());
// });
//
// http.createServer(app).listen(1337, function () {
//   console.log("Express server listening on port 1337");
// });
