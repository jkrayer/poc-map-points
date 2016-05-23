'use strict';

var Mongoose = require('mongoose');

const PinSchema = {
  mapId: String,
  x: Number,
  y: Number
};

var Pin = Mongoose.model('Pin', PinSchema, 'Pins');

module.exports = Pin;
