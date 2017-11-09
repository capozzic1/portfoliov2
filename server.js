// server.js
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const helper = require('sendgrid').mail;

const to_email = new helper.Email('capozzic1@gmail.com');

app.use(cors());
// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

//parse application/json
app.use(bodyParser.json());
app.post('/email', (req, res) => {
  console.log(req.body);

  let name = req.body.name;
  let from_email = new helper.email(req.body.email);
  let message = new helper.Content('text/plain', req.body.message);

  let mail = new helper.Mail(from_email, name, to_email, message);

  let sq = require('sendgrid')(process.env.SENDGRID_API_KEY);
  let request = sg.emptyRequest({method: 'POST', path: '/v3/mail/send', body: mail.toJSON()})

});

sg.API(request, function(error, response) {
  console.log(response.statusCode);
  console.log(response.body);
  console.log(response.headers);
})
// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});
// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);
