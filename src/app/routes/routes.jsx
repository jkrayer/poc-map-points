'use strict';

import App from '../components/app.jsx';
import Home from '../components/home.jsx';

const Routes = {
  path: '/',
  component: App,
  indexRoute: { component: Home },
  childRoutes: [
    { path: 'map/:urlString', component: Map }
  ]
};

export default Routes;
