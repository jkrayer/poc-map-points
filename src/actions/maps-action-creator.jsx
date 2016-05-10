var Dispatcher = require('../dispatcher');

module.exports = {
  addPin: function (map) {
    Dispatcher.dispatch({
      payload: map,
      type: 'Map:AddPin'
    });
  }
};
