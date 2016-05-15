'use strict';

import App from '../components/app.jsx';
import HomeContainer from '../components/home-container.jsx';

const Routes = {
  path: '/',
  component: App,
  indexRoute: { component: HomeContainer },
  childRoutes: [
    { path: 'map/:urlString', component: Map }
  ]
};

export default Routes;
