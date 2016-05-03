'use strict';

const path         = require('path');
const helmet       = require('helmet');
const bodyParser   = require('body-parser');
const session      = require('express-session');
const favicon      = require('serve-favicon');

module.exports = function (app, express) {

  app.use(helmet());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(session({
    resave: true,
    secret: 'Sup3rCmS0fTheD34d',
    saveUninitialized: true,
    cookie: { maxAge: 3600000 * 24 },
  }));

  // app.use(favicon(__dirname + '/../public/images/favicon.ico'));

  app.set('views', path.join(__dirname, '../src/frontend/pages'));
  app.set('view engine', 'pug');

  app.use(express.static(path.join(__dirname, '../public')));
  app.use(express.static(path.join(__dirname, '../uploads')));
};
