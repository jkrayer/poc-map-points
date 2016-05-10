var Map = require('../models/map');

module.exports = function (app) {
  app.route('/api/maps')
    .get(function(req, res){
      Map.find(function (error, doc) {
        res.send(doc);
      });
    });
}
