import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import { HomeRoutes } from './HomeRoutes';
import { HandleLogin } from '../components/HandleLogin/HandleLogin';
import { Home } from '../components/Home/Home';

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/auth" component={ HandleLogin } />
          <Route path="/home" component={ Home } />
        </Switch>
      </div>
    </Router>
  );
};
