'use strict';

var Mongoose = require('mongoose');
var Map = require('./models/map');
const Pin = require('./models/pin');

Mongoose.connect('mongodb://localhost/mappoints', function () {

//  Mongoose.connection.db.dropDatabase();
//  var maps = [
//    {
//      mapName: 'Barovia',
//      imagePath: '/img/baroviaregion.jpg',
//      urlSafeName: 'barovia'
//    },
//    {
//      mapName: 'Krezk',
//      imagePath: '/img/krezk.png',
//      urlSafeName: 'krezk'
//    }
//  ];
//
//  maps.forEach(function (item) {
//    new Map(item).save();
//  });

  console.log('connected to mongodb');
});
