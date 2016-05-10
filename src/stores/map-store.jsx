var Dispatcher = require('../dispatcher');
var AjaxHelper = require('../app/helpers/ajax');

function MapStore() {
  var maps = [];

  AjaxHelper.get('/api/maps')
  .then(function(data){
    maps = data;
    triggerListeners();
  });

  var listeners = [];

  function getMaps() {
    return maps;
  }

  function onChange(listener) {
    listeners.push(listener);
  }

  function addPin(pin) {

  }

  function triggerListeners(){
    listeners.forEach(function(listener){
      listener(maps);
    });
  }

  Dispatcher.register(function(event){
    var split = event.type.split(':');
    if (split[0] === 'Map') {
      switch (split[1]) {
          case 'AddPin':
            addPin(event.payload);
            break;
          default:
            break;
      }
    }
  });

  return {
    getMaps: getMaps,
    onChange: onChange
  };
}

module.exports = new MapStore();
