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
}
