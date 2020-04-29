import React, { useEffect, useState, useRef, Fragment } from 'react';
import * as d3 from 'd3';
import color from '../../assets/style/color';



const LineChart = (props) => {
	const { second, third } = color;
	const { data, chartWidth, chartHeight, margin } = props;
	//x轴比例尺
	const xScale = d3
		.scaleBand()
		.domain(data.map(item => item.year))
		.range([0, chartWidth])
		.paddingInner(0.3)
		.paddingOuter(0.4)
		.round(true);

	//带宽
	const bandWidth = xScale.bandwidth();

	//y轴比例尺
	const yScale = d3
		.scaleLinear()
		.domain([0, d3.max(data.map(item => item.value))])
		.range([chartHeight, 0])
		.nice();

	//折线
	const line = d3
		.line()
		.x(d => {
			return xScale(d.year) + bandWidth / 2;
		})
		.y(d => {
			return yScale(d.value);
		})
		.curve(d3.curveCatmullRom);

	//path节点
	const curveLine = useRef();

	//动画
	const [value, setValue] = useState(0);
	const [l, setL] = useState(0);
	useEffect(() => {
		setL(curveLine.current.getTotalLength())
		const t = d3.transition('line').duration(2000);
		t.tween('line', () => {
			return t => {
				setValue(t)
			};
		})

	}, [])

	//鼠标移到折线上的监听事件
	const [showIdx, setShowIdx] = useState(-1);
	const handleHover = (idx) => {
		setShowIdx(idx);
	}

	return (
		<Fragment>
			<g
				transform={`translate(${margin.left},${margin.top})`}>
				{/* 标题 */}
				<text x={chartWidth / 2} y={0} textAnchor={'middle'} fill={'#fff'}>
					折线图
				</text>
				{/* x轴 */}
				<g
					transform={`translate(0,${chartHeight})`}>
					{/* 轴线 */}
					<line x1={0} y1={0} x2={chartWidth} y2={0} stroke={second} />
					{/* 轴名称 */}
					<text x={chartWidth} y={24} textAnchor='middle' fill={'orange'}>
						year
					</text>
					{/* 轴点 */}
					{
						data.map((item, idx) => {
							const x = xScale(item.year) + bandWidth / 2;
							return (
								<g key={idx}>
									<line x1={x} y1={0} x2={x} y2={6} stroke={second} />
									<text x={x} y={24} fontSize={12} textAnchor={'middle'} fill={second}>
										{item.year}
									</text>
								</g>
							);
						})
					}
					{/* 箭头标记 */}
					<path d={`M ${chartWidth} -5 L ${chartWidth + 15} 0 L ${chartWidth} 5`} fill={second} />
				</g>
				{/* y轴 */}
				<g>
					<line x1={0} y1={0} x2={0} y2={chartHeight} stroke={second} />
					{/* 轴名称 */}
					<text x={-24} y={-10} textAnchor='middle' fill={'orange'}>
						value
					</text>
					{
						yScale.ticks(8).map((item, idx) => {
							const y = yScale(item);
							return (
								<g key={idx}>
									<line x1={0} y1={y} x2={-6} y2={y} stroke={second} />
									<text x={-24} y={y} fontSize={12} textAnchor={'start'} fill={second}>
										{item}
									</text>
								</g>
							);
						})
					}
					{/* 箭头标记 */}
					<path d={'M -5 0 L 0 -15 L 5 0'} fill={second} />
				</g>

				{/* 连线 */}
				<path d={line(data)} stroke={'purple'} fill={'none'} ref={curveLine} strokeDasharray={`${l * value},${l}`} strokeWidth={2} />
				{/* 数据点 */}
				<g>
					{
						data.map((item, idx) => {
							const x = xScale(item.year) + bandWidth / 2;
							const y = yScale(item.value);
							return (
								<g key={idx}>
									<circle cx={x} cy={y} r={'5'} fill={third} onMouseEnter={handleHover.bind(this, idx)} onMouseLeave={() => setShowIdx(-1)} />
									{
										showIdx === idx && (
											<text x={x} y={y - 10} textAnchor={'middle'} fill={second}>
												{item.value}
											</text>
										)
									}

								</g>
							);
						})
					}

				</g>
			</g>
		</Fragment>
	);
};

export default React.memo(LineChart);