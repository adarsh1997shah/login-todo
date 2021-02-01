import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { LoginContext } from './components/context/login.context';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));

const loader = {
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <LoginContext>
          <Suspense fallback={<div style={loader}>Loading...</div>}>
            <Switch>
              <PublicRoute path="/login">
                <Login />
              </PublicRoute>

              <PrivateRoute path="/">
                <Home />
              </PrivateRoute>
            </Switch>
          </Suspense>
        </LoginContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
