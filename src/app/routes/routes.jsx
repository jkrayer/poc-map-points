'use strict';

import App from '../components/app.jsx';
import HomeContainer from '../components/home-container.jsx';
import MapContainer from '../components/map-container.jsx';

const Routes = {
  path: '/',
  component: App,
  indexRoute: { component: HomeContainer },
  childRoutes: [
    { path: 'maps/', component: HomeContainer },
    { path: 'maps/:urlString', component: MapContainer }
  ]
};

export default Routes;
