'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx'
import ajax from './helpers/ajax'
import { Router, hashHistory } from 'react-router';
import Routes from './routes/routes.jsx';

const MapStore = require('./../stores/map-store.jsx');
let initial = MapStore.getMaps();

function render () {
  ReactDOM.render(
    <Router routes={Routes} history={hashHistory} />,
    document.getElementById('app-mount-point'));
}

MapStore.onChange(function (data) {
  initial = data;
  render();
});
