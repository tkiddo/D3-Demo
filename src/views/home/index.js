import React from 'react';

import LineChart from '../../components/chart/lineChart';
import Menu from '../../components/menu';

const Home = () => {

	return (
		<div>
			<Menu />
			<LineChart />

		</div>
	);
};

export default React.memo(Home);
