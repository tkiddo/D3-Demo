import React from 'react';
import { useHistory } from 'react-router-dom';
import './index.less'

const Menu = (props) => {
	const history = useHistory();
	const signOut = () => {
		localStorage.removeItem('token');
		setTimeout(() => {
			history.push('/');
		}, 1000);
	}
	return (
		<div className='top-bar'>
			<button onClick={signOut}>sign out</button>
		</div>
	)
}

export default React.memo(Menu)