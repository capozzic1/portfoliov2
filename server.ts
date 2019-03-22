import 'zone.js/dist/zone-node';
import { enableProdMode } from '@angular/core';
// Express Engine
import { ngExpressEngine } from '@nguniversal/express-engine';
// Import module map for lazy loading
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';
import * as express from 'express';
import * as fs from 'fs';
import { join } from 'path';
require('dotenv').config()
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const helper = require('sendgrid').mail;
const compression = require('compression');
const to_email = new helper.Email('capozzic1@gmail.com');
// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// Express server
const app = express();
app.use(cors());
app.use(compression());
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//parse application/json
app.use(bodyParser.json());

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: 'capozzic1@gmail.com',
  from: 'test@example.com',
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
sgMail.send(msg);
// app.post('/email', (req, res) => {
//   console.log(req.body);

//   let name = req.body.name;
//   let from_email = new helper.Email(req.body.email);
//   let message = new helper.Content('text/plain', req.body.message);

//   let mail = new helper.Mail(from_email, name, to_email, message);

//   let sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
//   let request = sg.emptyRequest({ method: 'POST', path: '/v3/mail/send', body: mail.toJSON() })

//   sg.API(request, function (error, response) {
//     console.log(response.statusCode);
//     console.log(response.body);
//     console.log(response.headers);
//   })

// });

const PORT = process.env.PORT || 4000;
const DIST_FOLDER = join(process.cwd(), 'dist/browser');

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist/server/main');

// Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));

app.set('view engine', 'html');
app.set('views', DIST_FOLDER);

// Example Express Rest API endpoints
// app.get('/api/**', (req, res) => { });
// Serve static files from /browser
app.get('*.*', express.static(DIST_FOLDER, {
  maxAge: '1y'
}));

// All regular routes use the Universal engine
app.get('*', (req, res) => {
  res.render('index', { req });
});

// Start up the Node server
// app.listen(PORT, () => {
//   console.log(`Node Express server listening on http://localhost:${PORT}`);
// });
app.listen(PORT, () => {
    console.log(`Node Express server listening on https://localhost:${PORT}`);
  })



