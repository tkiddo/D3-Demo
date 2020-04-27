export const split = (len) => {
	let arr = [];
	let l = 0, interval = 15;
	while (l < len) {
		l += interval;
		arr.push(l);
	}
	return arr;
}