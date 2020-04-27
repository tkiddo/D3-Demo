import React from 'react';
import './index.scss';

import LineChart from '../../components/chart/lineChart';
import Menu from '../../components/menu';

const Home = () => {

	return (
		<div>
			<Menu />
			<div className='wrapper'>
				<LineChart />
			</div>

		</div>
	);
};

export default React.memo(Home);
