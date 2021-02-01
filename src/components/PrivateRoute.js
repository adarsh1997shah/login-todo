import React, { useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';

const setInitialState = () => {
	if(localStorage.getItem('login')) {
		return JSON.parse(localStorage.getItem('login'));
	} else {
		return null;
	}
}

function PrivateRoute({children, routeProps}) {
	const [profile, setProfile] = useState(setInitialState())

	useEffect(() => {
		if(profile) {
			<Redirect to="/login" />
		}
	})

	return <Route {...routeProps}>{children}</Route>
}

