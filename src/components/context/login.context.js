import React, { createContext, useContext, useEffect, useState } from 'react';

const Login = createContext();

export function LoginContext({ children }) {
  const [loginData, setLoginData] = useState(null);

  useEffect(() => {
    if (localStorage.getItem('login')) {
      setLoginData(JSON.parse(localStorage.getItem('login')));
    } else {
      setLoginData(null);
    }
  }, []);

  return <Login.Provider value={loginData}>{children}</Login.Provider>;
}

export const useLogin = () => useContext(Login);
