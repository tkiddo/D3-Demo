import React, { useState, useEffect } from 'react';
import './index.scss';

import BarChart from '../../components/chart/barChart';
import Wrapper from '../../components/chart/wrapper';
import LineChart from '../../components/chart/lineChart';
import PieChart from '../../components/chart/pieChart';
import Menu from '../../components/menu';


const data1 = [
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
		y: 250
	},
	{
		x: 'x4',
		y: 190
	},
	{
		x: 'x5',
		y: 190
	}
];

const data2 = [
	{ year: '1991', value: 3 },
	{ year: '1992', value: 4 },
	{ year: '1993', value: 3.5 },
	{ year: '1994', value: 5 },
	{ year: '1995', value: 4.9 },
	{ year: '1996', value: 6 },
	{ year: '1997', value: 7 },
	{ year: '1998', value: 9 },
	{ year: '1999', value: 13 }
];

const data3 = [
	{
		x: "x1",
		y: 320
	},
	{
		x: "x2",
		y: 200
	},
	{
		x: "x3",
		y: 25
	},
	{
		x: "x4",
		y: 190
	},
	{
		x: "x5",
		y: 90
	}
];
const WIDTH = 600;
const HEIGHT = 400;
const margin = {
	left: 50,
	right: 50,
	top: 50,
	bottom: 50
}


const Home = () => {
	const [value1, setValue1] = useState(data1);
	useEffect(() => {
		setInterval(() => {
			setValue1(data1.map(d => ({ ...d, y: d.y * Math.random() })));
		}, 1000);
	}, []);
	return (
		<div>
			<Menu />
			<div className='wrapper'>
				<Wrapper width={WIDTH} height={HEIGHT} margin={margin}>
					<BarChart data={value1} />
				</Wrapper>
				<Wrapper width={WIDTH} height={HEIGHT} margin={margin}>
					<LineChart data={data2} />
				</Wrapper>
				<Wrapper width={WIDTH} height={HEIGHT} margin={margin}>
					<PieChart data={data3} />
				</Wrapper>
			</div>

		</div>
	);
};

export default React.memo(Home);
