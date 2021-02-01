import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
			<BrowserRouter>
				<Switch>
					<Route path="/login">
						<Login />
					</Route>
					<Route exact path="/">
						<Home />
					</Route>
				</Switch>
			</BrowserRouter>
    </div>
  );
}

export default App;
