import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './index.scss'
const Login = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const handleUsername = (e) => {
		setUsername(e.target.value)
	}
	const handlePassword = (e) => {
		setPassword(e.target.value)
	}
	let history = useHistory();
	const handleLogin = () => {
		if (username === '' || password === '') {
			return alert('Error')
		}
		localStorage.setItem('token', '1')
		localStorage.setItem('username', username);
		localStorage.setItem('password', password);
		setTimeout(() => {
			history.push('/');
		}, 1000);
	};

	return (
		<div className='bg all-center'>
			<form className='form flex-column all-center'>
				<div className='form-group'>
					<label htmlFor='usename'>Username</label>
					<input className='form-control' onChange={handleUsername} value={username} />
				</div>
				<div className='form-group'>
					<label htmlFor='password'>Password</label>
					<input className='form-control' type='password' onChange={handlePassword} value={password} />
				</div>
				<div className='form-group all-center'>
					<button className='primary' onClick={handleLogin}>Login</button>
				</div>
			</form>
		</div>
	);
};

export default Login;