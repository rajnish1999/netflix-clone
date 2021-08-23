import React from 'react';
import { Link, Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import './App.css';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';

function App() {
  const user = null;
  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />) : ( 
          <>
            <Switch>
              <Route exact path="/">
                <HomeScreen />
              </Route>
            </Switch>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
