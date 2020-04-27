import React from 'react';
import './index.scss';

const Button = (props) => {
	const { onClick } = props;
	return (
		<button type='button' onClick={onClick}>{props.children}</button>
	)
}

export default Button;