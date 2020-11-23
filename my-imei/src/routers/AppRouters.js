import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { HandleAuth } from '../components/HandleAuth/HandleAuth';
// import { HomeRoutes } from './HomeRoutes';
import { Home } from '../components/Home/Home';

export const AppRouter = () => {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/auth" component={ HandleAuth } />
          <Route path="/home" component={ Home } />
        </Switch>
      </>
    </Router>
  );
};
