import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { HeaderHome } from '../components/HeaderHome/HeaderHome';
import { Home } from '../components/Home/Home';

export const HomeRouter = ({ history }) => {
  console.log('home router -> ', history)

  const handleHeaderActions = ({ type }) => {
    if ( type == 'logout' ) {
      history.replace('/auth')
    }
  }

  return (
    <Router>
      <>
        <HeaderHome headerActions={ handleHeaderActions } />
        <Switch>
          <Route exact path="" component={ Home } />

          {/* <Route exact component={ Home } /> */}

        </Switch>
      </>
    </Router>
  );
};
