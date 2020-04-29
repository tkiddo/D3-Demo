import React, { Fragment, useEffect, useState } from 'react';
import BarChart from './barChart';
import LineChart from './lineChart';
import PieChart from './pieChart';
import Wrapper from './wrapper';

const data = [
	{
		x: 'x1',
		y: 320
	},
	{
		x: 'x2',
		y: 200
	},
	{
		x: 'x3',
		y: 25
	},
	{
		x: 'x4',
		y: 190
	},
	{
		x: 'x5',
		y: 90
	}
];

const Charts = () => {
	const [value, setValue] = useState(data);
	useEffect(() => {
		// setInterval(() => {
		// 	setValue(data.map(d => ({ ...d, y: d.y * Math.random() })));
		// }, 1000);
	}, []);
	return (
		<Fragment>
			<BarChart data={value} />
			<LineChart />
			<PieChart />
			<Wrapper width={600} height={400} />
		</Fragment>
	);
};

export default React.memo(Charts);