import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignOut from '../pages/SignOut';
import Dashboard from '../pages/Dashboard';

import Tenants from '../pages/Tenants/List';
import TenantsForm from '../pages/Tenants/Form';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/SignOut" component={SignOut} />
    <Route path="/dashboard" component={Dashboard} isPrivate />

    <Route path="/tenants" component={Tenants} isPrivate />
    <Route path="/tenants-form" component={TenantsForm} isPrivate />
  </Switch>
);

export default Routes;
