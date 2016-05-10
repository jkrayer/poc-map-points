'use strict';

var express = require('express');
var config = require('../config');
var parser = require('body-parser');
var React = require('react');
var ReactDOM = require('react-dom/server');

var app = new express();

require('./database');

app.use(parser.json());
app.use(parser.urlencoded({extended:false})); //post requests

app.get('/', function (req, res) {
  res.render('./../public/index.ejs', {});
})
.use(express.static(config.root + '/public'))
.listen(7777);

require('./routes/routes')(app);
