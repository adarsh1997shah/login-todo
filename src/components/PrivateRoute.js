import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useLogin } from './context/login.context';

function PrivateRoute({ children, ...routeProps }) {
  const login = useLogin();

  if (login) {
    return <Redirect to="/" />;
  }

  return <Route {...routeProps}>{children}</Route>;
}

export default PrivateRoute;
