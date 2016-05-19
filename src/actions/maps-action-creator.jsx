var Dispatcher = require('../dispatcher');

module.exports = {
  add: function (map) {
    Dispatcher.dispatch({
      payload: map,
      type: 'Map:Add'
    });
  }
};
