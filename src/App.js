import React, { useEffect } from 'react';
import { Link, Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import './App.css';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import { auth, db } from './Firebase'

function App() {
  const user = null;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if(userAuth) {
        //Logged in
        console.log("userInfo ",userAuth);
      } else {
        // logged out
      }
    })

    return () => {
      unsubscribe();
    }
  })

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
