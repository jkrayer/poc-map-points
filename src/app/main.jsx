'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import Routes from './routes/routes.jsx';

ReactDOM.render(
  <Router routes={Routes} history={hashHistory} />,
  document.getElementById('app-mount-point')
);
