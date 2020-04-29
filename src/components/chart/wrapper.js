import React from 'react';
import color from '../../assets/style/color';
import { split } from '../../utils/index';

const Wrapper = (props) => {
	const { width, height, margin } = props;
	const { first, second, grey } = color;
	const chartWidth = width - margin.left - margin.right;
	const chartHeight = height - margin.bottom - margin.top;

	const v = split(height);
	const h = split(width);

	const newChildren = React.Children.map(props.children, item => {
		return React.cloneElement(item, {
			margin,
			chartWidth,
			chartHeight
		})
	})

	return (
		<svg width={width} height={height}>
			{/* 边框 */}
			<rect x={0} y={0} width={width} height={height} stroke={second} fill={first} fillOpacity={'0.5'} rx={10} ry={10} strokeWidth={0.2} />
			{/* 背景网格 */}
			{
				v.map((item, idx) => (
					<line x1={0} y1={item} x2={width} y2={item} key={idx} stroke={grey} strokeWidth={0.2} />
				))
			}
			{
				h.map((item, idx) => (
					<line x1={item} y1={0} x2={item} y2={height} key={idx} stroke={grey} strokeWidth={0.2} />
				))
			}
			{newChildren}
		</svg>
	)
}

export default React.memo(Wrapper);