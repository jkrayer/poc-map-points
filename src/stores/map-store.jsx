import Dispatcher from '../dispatcher';
import AjaxHelper from '../app/helpers/ajax';

function MapStore() {
  let maps = [];

  AjaxHelper.get('/api/maps')
  .then(function(data){
    maps = data;
    triggerListeners();
  });

  let listeners = [];

  function getMaps() {
    return maps;
  }

  function onChange(listener) {
    listeners.push(listener);
  }

  function addMap(map) {
    maps.push(map);
    triggerListeners();
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
          case 'AddMap':
            addPin(event.payload);
            break;
          default:
            break;
      }
    }
  });

  return {
    addMap: addMap,
    getMaps: getMaps,
    onChange: onChange
  };
}

module.exports = new MapStore();
