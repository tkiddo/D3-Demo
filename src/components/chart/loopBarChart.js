import React, { Fragment, useState, useEffect } from 'react';
import * as d3 from 'd3';

import { randomColor } from '../../utils/index';

const COLORS = randomColor(12)


const LoopBarChart = (props) => {
	const { data, chartWidth, chartHeight, margin } = props;
	const outerRadius = d3.min([chartWidth, chartHeight]) / 2;

	//x轴
	const xScale = d3
		.scaleBand()
		.domain(data.map(d => d.month))
		.range([0, 2 * Math.PI])
		.align(0)

	//y轴
	const yScale = d3
		.scaleLinear()
		.domain([0, 100])
		.range([40, outerRadius])

	//同心圆
	const arc = d3
		.arc()
		.startAngle(0)
		.endAngle(Math.PI * 2)

	//柱状图
	const arc2 = d3
		.arc()
		.innerRadius(yScale(0))

	//动画
	const [value, setValue] = useState(0);
	useEffect(() => {
		const t = d3.transition('loopBar').duration(1000);
		t.tween('loop', () => {
			return t => {
				setValue(t)
			}
		})
	}, [])

	//交互
	const [active, setActive] = useState(-1);
	const normalStyle = {
		cursor: "pointer",
		opacity: 1,
		transform: "scale(1)",
		transition: "all linear 200ms"
	};

	const hoverStyle = {
		transform: "scale(1.1)"
	};

	const noHoverStyle = {
		opacity: 0.5
	}; 
	return (
		<Fragment>
			<g
				transform={`translate(${margin.left + chartWidth / 2},${margin.top + chartHeight / 2})`}>

				{
					// data.map((d, i) => {
					// 	return (
					// 		<g transform={`rotate(${xScale(d.month) * 360})`} key={i}>
					// 			<line x1={0} y1={0} x2={0} y2={-5} stroke={'#fff'} />
					// 		</g>
					// 	)
					// })
				}
				{
					data.map((d, i) => {
						const arcGen = arc2
							.outerRadius(yScale(d.count))
							.startAngle(xScale(d.month) * value)
							.endAngle((xScale(d.month) + Math.PI / 6) * value)

						const style = active === -1 ? normalStyle : active === i ? { ...normalStyle, ...hoverStyle } : { ...normalStyle, ...noHoverStyle }

						return (
							<g key={i}
								style={style}
								onMouseEnter={() => setActive(i)}
								onMouseLeave={() => setActive(-1)}>
								<path d={arcGen()} fill={COLORS[i % 12]} />
							</g>
						)
					})
				}

				{
					yScale.ticks(3).map((d, i) => {
						const y = yScale(d);
						const arcGen = arc
							.innerRadius(0)
							.outerRadius(y)
						return <path d={arcGen()} stroke={'#fff'} fill={'transparent'} key={i} />
					})
				}


			</g>
		</Fragment>
	)
}

export default React.memo(LoopBarChart);