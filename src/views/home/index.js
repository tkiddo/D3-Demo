import React from 'react';
import './index.scss';

import Charts from '../../components/chart'
import Menu from '../../components/menu';

const Home = () => {

	return (
		<div>
			<Menu />
			<div className='wrapper'>
				<Charts />
			</div>

		</div>
	);
};

export default React.memo(Home);
