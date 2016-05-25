'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import Routes from './routes/routes.jsx';

ReactDOM.render(
  <Router routes={Routes} history={browserHistory} />,
  document.getElementById('app-mount-point')
);
