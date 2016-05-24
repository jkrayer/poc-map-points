var Dispatcher = require('../dispatcher');

module.exports = {
  add: function (pin) {
    Dispatcher.dispatch({
      payload: pin,
      type: 'Pin:Add'
    });
  },
  delete: function (pinId) {
    Dispatcher.dispatch({
      payload: pinId,
      type: 'Pin:Delete'
    });
  },
  update: function (map) {
    Dispatcher.dispatch({
      payload: pin,
      type: 'Pin:Update'
    });
  }
};
