import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Calc from '../containers/Calc/main/Calculator';
import First from '../containers/FirstTestes';
import ReactLogo from '../components/ReactLogo';
import Flappy from '../containers/Flappy';
import Hitest from '../containers/HiTest';

export default (props) => (
  <Switch>
    <Route path="/" exact component={ReactLogo} />
    <Route path="/calc" component={Calc} />
    <Route path="/first-testes" component={First} />
    <Route path="/flappy" component={Flappy} />
    <Route path="/hitest" component={Hitest} />
    <Redirect from="*" to="/" />
  </Switch>
);
