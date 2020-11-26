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


  const hola = () => {
    history.replace('/auth')
  } 
  return (
    <>
      <HeaderHome hola1={ hola } />
      <Switch>
        <Route  path="" component={ Home } />

        {/* <Route exact component={ Home } /> */}

      </Switch>
    </>
  );
};
