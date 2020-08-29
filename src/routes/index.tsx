import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '~/pages/Home';
import Employee from '~/pages/Employee';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/employee" exact component={Employee} />
    <Route path="/employee/:id" exact component={Employee} />
  </Switch>
);

export default Routes;
