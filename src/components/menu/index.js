import React from 'react';
import { useHistory } from 'react-router-dom';
import './index.scss';


const Menu = () => {
	const history = useHistory();
	const signOut = () => {
		localStorage.removeItem('token');
		setTimeout(() => {
			history.push('/');
		}, 1000);
	};
	return (
		<div className='top-bar flex-between'>
			<div className='logo'>
				<span>数据可视化</span>
			</div>
			<button className='btn logout' onClick={signOut}>Logout</button>
		</div>
	);
};

export default React.memo(Menu);