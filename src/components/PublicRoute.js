import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useLogin } from './context/login.context';

function PublicRoute({ children, ...routeProps }) {
  const login = useLogin();

  if (!login) {
    return <Redirect to="/login" />;
  }

  return <Route {...routeProps}>{children}</Route>;
}

export default PublicRoute;
