import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useLogin } from './context/login.context';

function PublicRoute({ children, ...routeProps }) {
  const { loginData } = useLogin();

  if (loginData) {
    return <Redirect to="/" />;
  }

  return <Route {...routeProps}>{children}</Route>;
}

export default PublicRoute;
