import React from 'react';
import { useHistory } from 'react-router-dom'

const Login = (props) => {
	let history = useHistory();
	const handleLogin = () => {

		localStorage.setItem('token', '123456');
		setTimeout(() => {
			history.push('/')
		}, 1000);
	}

	return (
		<button onClick={handleLogin}>login</button>
	)
}

export default Login