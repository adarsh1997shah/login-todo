import React, { useState } from 'react';
import {useHistory } from 'react-router-dom';
import {Input, InputGroup, Button} from 'rsuite';

function Login() {
	const [formValue, setFormValue] = useState({name: '', password: ''});
	const history = useHistory();

	const handleNameChange = (value) => {
		setFormValue( p=> ({...p, name: value}));
	}

	const handlePasswordChange = (value) => {
		setFormValue( p=> ({...p, password: value}));
	}

	const handleFormSubmit = () => {

		if(formValue.name !== '' && formValue.name !== '') {
			localStorage.setItem('login', JSON.stringify(formValue));
			setFormValue({name: '', password: ''});
			history.push('/');
		}
	}

	console.log(formValue);

	return(
		<>
		<InputGroup>
			<h5>Name</h5>
			<Input onChange={handleNameChange} value={formValue.name} type="text" />
		</InputGroup>

		<InputGroup>
			<h5>Password</h5>
			<Input onChange={handlePasswordChange} value={formValue.password} type="password" />
		</InputGroup>

		<Button appearance="primary" onClick={handleFormSubmit}>Submit</Button>
		</>
	)
}

export default Login;