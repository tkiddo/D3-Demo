export const split = (len) => {
	let arr = [];
	let l = 0, interval = 15;
	while (l < len) {
		l += interval;
		arr.push(l);
	}
	return arr;
}

export const randomColor = (num) => {

	let arr = [];
	while (num > 0) {
		const r = Math.floor(Math.random() * 255);
		const g = Math.floor(Math.random() * 255);
		const b = Math.floor(Math.random() * 255);
		arr.push('rgba(' + r + ',' + g + ',' + b + ',0.8)')
		num--;
	}
	return arr;
}