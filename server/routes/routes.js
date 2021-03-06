'use strict';

var Map = require('../models/map');
const Pin = require('../models/pin');

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
        if (!error) {
          res.status(200).type('json').send(data);
        } else {
          res.status(500).type('json').send(error);
        }
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
            if (key === '_id') { continue; }
            doc[key] = req.body[key];
          }

          doc.save();
          res.status(200).send();
        }
      );
    });
  //pins routes
  app.route('/api/pins')
    .get(function(req, res) {
      Pin.find(function (error, doc) {
        res.send(doc);
      });
    })
    .post(function(req, res) {
      let pinData = req.body;
      let pin = new Pin(pinData);
      pin.save(function (error, data) {
      if (!error) {
        res.status(200).type('json').send(data);
      } else {
        res.status(500).type('json').send(error);
      }
      });
    });
  app.route('/api/pins/:id')
    .delete(function(req, res) {
      Pin.findOne({
        _id: req.params.id
      }).remove(function (error, result){
        res.status(300).send();
      });
    })
    .patch(function(req, res) {
      Pin.findById(req.params.id,
        function (error, doc) {
          for (let key in req.body) {
            if (key === '_id') { continue; }
            doc[key] = req.body[key];
          }

          doc.save();
          res.status(200).send();
        }
      );
    });
}
