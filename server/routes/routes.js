'use strict';

var Map = require('../models/map');

module.exports = function (app) {
  app.route('/api/maps')
    .get(function(req, res){
      Map.find(function (error, doc) {
        res.send(doc);
      });
    })
    .post(function(req, res){
      let map = req.body;
      let locationMap = new Map(map);
      locationMap.save(function (error, data) {
          res.status(300).send();
      });
    });
  app.route('/api/maps/:id')
    .delete(function(req, res) {
      Map.findOne({
        _id: req.params.id
      }).remove(function (error, result){
        res.status(300).send();
      });
    })
    .patch(function(req, res) {
      Map.findById(req.params.id,
        function (error, doc) {
          for (let key in req.body) {
            if (key === '_id' || key.indexOf('pins') === 0) { continue; }
            doc[key] = req.body[key];
          }
          doc.pins = makePinsArray(req.body)
          doc.save();
          res.status(200).send();
        }
      );
    });
}

function makePinsArray(obj) {
  var pins = [];

  for (let key in obj ) {
    if (key === 'pinKey') { key = x; }
    if (key.indexOf('pins') !== 0) { continue; }
    let index = parseInt(/\d+/.exec(key)[0], 10);
    let pinKey = /\[([a-z]+)\]/i.exec(key)[1];
    let pinValue = parseInt(obj[key], 10);
    if (pins[index]) {
      pins[index][pinKey] = pinValue;
      continue;
    }
    let o = {};
    o[pinKey] = pinValue;
    pins.push(o);
  }

  return pins;
}
