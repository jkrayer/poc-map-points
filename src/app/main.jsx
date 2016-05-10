'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx'
import ajax from './helpers/ajax'

const MapStore = require('./../stores/map-store.jsx');
let initial = MapStore.getMaps();

function render () {
  ReactDOM.render(<App data={initial} />, document.getElementById('app-mount-point'));
}

MapStore.onChange(function (data) {
  initial = data;
  render();
});
