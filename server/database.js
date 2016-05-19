var Mongoose = require('mongoose');
var Map = require('./models/map');

Mongoose.connect('mongodb://localhost/mappoints', function () {
  console.log('connected to mongodb');

//  Mongoose.connection.db.dropDatabase();
//  var items = [
//    {
//      mapName: 'Norway',
//      imagePath: '/img/norway.png',
//      urlSafeName: 'norway'
//    }
//  ];
//
//  items.forEach(function (item) {
//    new Map(item).save();
//  });

});
