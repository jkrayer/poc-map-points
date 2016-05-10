'use strict';

const App = import '../components/app.jsx';
const PlayerContainer = import '../components/player-container.jsx';

export default const Routes = {
  path: '/',
  component: App,
  indexRoute: { component: PlayerContainer },
  childRoutes: [
    //<Redirect from='login' to='sessions/new' />
    //{ path: 'position/:id', component: Position }
  ]
};
