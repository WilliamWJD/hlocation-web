import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import SignOut from './pages/SignOut';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route path="/sign-out" component={SignOut} />
  </Switch>
);

export default Routes;
