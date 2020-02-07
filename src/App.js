import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './utils/history';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import logo from './logo.svg';
import './App.css';

import Dashboard from './containers/Dashboard';
import First from './containers/FirstTestes';
import Calc from './containers/Calc/main/Calculator'

const userStyles = makeStyles({
  root: {
    color: '#61dafb',
  },
});


function App() {
  const classes = userStyles();

  return (
      <Router history={history}>
        <Switch>
          <Route path='/' exact>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Here I learn and tests things with React.
              </p>
              <Button 
                variant="outlined"
                className={classes.root}
                href="#text-buttons"
                onClick={() => {
                  history.push('/dashboard');
                }}
              >
                Go to my tets
              </Button>
            </header>
          </div>
          </Route>
          <Route path='/dashboard'> 
            <Dashboard />
          </Route>
          <Route path='/first'> 
            <First />
          </Route>
          <Route path='/calc'> 
            <Calc />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
