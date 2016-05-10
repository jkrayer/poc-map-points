var UUID = require('node-uuid');
var listeners = {};

module.exports = {
  register: function (callback) {
    var id = UUID.v1();
    listeners[id] = callback;
    return id;
  },
  dispatch: function (payload) {
    //console.info('Dispatching ...', payload);
    for (var id in listeners) {
      var listener = listeners[id];
      listener(payload);
    }
  }
};
