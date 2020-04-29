import React, { useState, useEffect } from 'react';
import './index.scss';

import BarChart from '../../components/chart/barChart';
import Wrapper from '../../components/chart/wrapper';
import LineChart from '../../components/chart/lineChart';
import PieChart from '../../components/chart/pieChart';
import LoopBarChart from '../../components/chart/loopBarChart';
import Menu from '../../components/menu';

import mockData from '../../assets/mock/data';

const WIDTH = 600;
const HEIGHT = 400;
const margin = {
	left: 50,
	right: 50,
	top: 50,
	bottom: 50
}


const Home = () => {
	const { data1, data2, data3, data4 } = mockData;
	const [value1, setValue1] = useState([]);
	useEffect(() => {
		setTimeout(() => {
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
				<Wrapper width={WIDTH} height={HEIGHT} margin={margin}>
					<LoopBarChart data={data4} />
				</Wrapper>
			</div>

		</div>
	);
};

export default React.memo(Home);
