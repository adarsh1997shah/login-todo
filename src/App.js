import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { LoginContext } from './components/context/login.context';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <LoginContext>
          <Switch>
            <PrivateRoute path="/login" exact>
              <Login />
            </PrivateRoute>
            <PublicRoute exact path="/">
              <Home />
            </PublicRoute>
          </Switch>
        </LoginContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
