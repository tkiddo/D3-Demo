import React, { useEffect, useState } from 'react';
import * as d3 from 'd3';

import color from '../../assets/style/color';
import { split } from '../../utils/index';


const margin = {
	top: 40,
	right: 40,
	bottom: 40,
	left: 60
};

const WIDTH = 450;
const HEIGHT = 400;
const BarChart = (props) => {
	const { first, second, grey } = color;
	const { data } = props;
	const chartWidth = WIDTH - margin.left - margin.right;
	const chartHeight = HEIGHT - margin.bottom - margin.top;

	const [value, setValue] = useState(() => data.map(d => ({ ...d, y: 0 })));

	useEffect(() => {
		const t = d3.transition('bar').duration(2000);

		t.tween('bar', () => {
			let interpolates = data.map((d, i) => {
				let start = (value[i] && value[i].y) || 0;
				return d3.interpolateNumber(start, d.y);
			});
			return t => {
				let newData = data.map((d, i) => {
					return { ...d, y: interpolates[i](t) };
				});

				setValue(newData);
			};
		});
	}, [data]);
	//x轴
	const xScale = d3
		.scaleBand()
		.domain(data.map(item => item.x))
		.range([0, chartWidth])
		.paddingInner(0.2)
		.paddingOuter(0.3)
		.round(true);
	const bindWidth = xScale.bandwidth();

	//y轴
	const yScale = d3
		.scaleLinear()
		.domain([0, d3.max(data.map(item => item.y))])
		.range([chartHeight, 0])
		.nice();


	const v = split(HEIGHT);
	const h = split(WIDTH);
	return (
		<svg width={WIDTH} height={HEIGHT}>
			<linearGradient id="linear-gradient" x1={0} x2={0} y1={1} y2={0}>
				<stop offset="0%" stopColor="#16a3ff" />
				<stop offset="100%" stopColor="#6ddead" />
			</linearGradient>
			{/* 边框 */}
			<rect x={0} y={0} width={WIDTH} height={HEIGHT} stroke={second} fill={first} fillOpacity={'0.5'} rx={10} ry={10} strokeWidth={0.2} />
			{/* 背景网格 */}
			{
				v.map((item, idx) => (
					<line x1={0} y1={item} x2={WIDTH} y2={item} key={idx} stroke={grey} strokeWidth={0.2} />
				))
			}
			{
				h.map((item, idx) => (
					<line x1={item} y1={0} x2={item} y2={HEIGHT} key={idx} stroke={grey} strokeWidth={0.2} />
				))
			}
			<g
				transform={`translate(${margin.left},${margin.top})`}>
				{/* x轴 */}
				<g
					transform={`translate(0,${chartHeight})`}>
					<line x1={0} y1={0} x2={chartWidth} y2={0} stroke={second} />
					{
						data.map((item, idx) => {
							const x = xScale(item.x) + bindWidth / 2;
							return (
								<g key={idx}>
									<line x1={x} y1={0} x2={x} y2={6} stroke={second} />
									<text x={x} y={20} fontSize={12} textAnchor={'middle'} fill={second}>
										{item.x}
									</text>
								</g>

							);
						})
					}
				</g>

				{/* y轴 */}
				<g
				>
					<line x1={0} y1={0} x2={0} y2={chartHeight} stroke={second} />
					{
						//https://segmentfault.com/a/1190000008750211 ticks
						yScale.ticks(5).map(item => {
							const y = yScale(item);

							return (
								<g key={item}>
									<line x1={0} y1={y} x2={-12} y2={y} stroke={second} />
									<text x={-15} y={y} fontSize={12} textAnchor={'end'} fill={second}>
										{item}
									</text>
								</g>
							);
						})
					}
				</g>

				{/* 数据 */}
				<g
					fill={'url(#linear-gradient)'}
				>
					{
						value.map((item, idx) => {
							const x = xScale(item.x);
							const y = yScale(item.y);
							const height = chartHeight - y;
							return (
								<g key={idx}>
									<rect x={x} y={y} width={bindWidth} height={height} />
									<text x={x + bindWidth / 2} y={y - 12} fontSize={12} textAnchor={'middle'}>
										{item.y.toFixed(0)}
									</text>
								</g>
							);
						})
					}
				</g>
			</g>


		</svg>
	);
};

export default BarChart;

//https://zhuanlan.zhihu.com/p/85862899