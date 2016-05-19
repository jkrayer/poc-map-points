var Dispatcher = require('../dispatcher');

module.exports = {
  add: function (map) {
    Dispatcher.dispatch({
      payload: map,
      type: 'Map:Add'
    });
  },
  delete: function (mapId) {
    Dispatcher.dispatch({
      payload: mapId,
      type: 'Map:Delete'
    });
  }
};
