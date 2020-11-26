import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { HandleAuth } from '../components/HandleAuth/HandleAuth';
// import { HomeRoutes } from './HomeRoutes';
import { Home } from '../components/Home/Home';
import { HomeRouter } from './HomeRouter';

export const AppRouter = () => {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/auth" component={ HandleAuth } />
          <Route exact path="/home" component={ HomeRouter } />

          <Route component={ HomeRouter } />

        </Switch>
      </>
    </Router>
  );
};
