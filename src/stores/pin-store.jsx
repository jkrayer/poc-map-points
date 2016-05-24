import Dispatcher from '../dispatcher';
import AjaxHelper from '../app/helpers/ajax';

function PinStore() {
  let pins = [];

  AjaxHelper.get('/api/pins')
  .then(function(data){
    pins = data;
    triggerListeners();
  });

  let listeners = [];

  function getPins() {
    return pins;
  }

  function getMapPins(mapId) {
    let subArr = pins.filter(function(pin) {
      return pin.mapId === mapId;
    });
    return subArr;
  }

  function onChange(listener) {
    listeners.push(listener);
  }

  function addPin(pin) {
    pins.push(pin);
    triggerListeners();
    AjaxHelper.post('api/pins', pin);
  }

  function deletePin(pinId) {
    let index = -1;
    pins.filter(
      function(_pin, _index) {
        if (_pin._id === pinId) {
          index = _index;
          return;
        }
      }
    );

    pins.splice(index, 1);
    triggerListeners();
    AjaxHelper.del('api/pins/' + pinId);
  }

  function updatePin(pin) {
    let index = -1;
    pins.filter(
      function(_pin, _index) {
        if (_pin._id === pin._id) {
          index = _index;
          return;
        }
      }
    );
    pins.splice(index, 1, pin);
    triggerListeners();
    AjaxHelper.patch('api/pins/' + pin._id, pin);
  }

  function triggerListeners(){
    listeners.forEach(function(listener){
      listener(pins);
    });
  }

  Dispatcher.register(function(event){
    var split = event.type.split(':');
    if (split[0] === 'Pin') {
      switch (split[1]) {
        case 'Add':
          addPin(event.payload);
          break;
        case 'Delete':
          deletePin(event.payload);
          break;
        case 'Update':
          updatePin(event.payload);
          break;
        default:
          break;
      }
    }
  });

  return {
    getMapPins: getMapPins,
    getPins: getPins,
    onChange: onChange
  };
}

module.exports = new PinStore();
