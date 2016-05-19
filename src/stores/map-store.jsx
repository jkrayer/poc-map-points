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
    AjaxHelper.post('api/maps', map); //.then() for error handling
  }

  function deleteMap(mapId) {
    let index = -1;
    maps.filter(
      function(_map, _index) {
        if (_map._id === mapId) {
          index = _index;
          return;
        }
      }
    );

    maps.splice(index, 1);
    triggerListeners();
    AjaxHelper.del('api/maps/' + mapId);
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
          case 'Add':
            addMap(event.payload);
            break;
            case 'Delete':
              deleteMap(event.payload);
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
