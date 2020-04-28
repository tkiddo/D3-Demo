import React, { Fragment, useEffect, useState } from 'react';
import BarChart from './barChart';
import LineChart from './lineChart';
import PieChart from './pieChart'

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
	const [value, setValue] = useState([]);
	useEffect(() => {
		setTimeout(() => {
			setValue(data);
		}, 10);
	}, []);
	return (
		<Fragment>
			<PieChart />
			<BarChart data={value} />
			<LineChart />

		</Fragment>
	);
};

export default Charts;