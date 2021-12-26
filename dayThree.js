const fs = require('fs');

const lines = fs
	.readFileSync('text_files/dayThree.txt', { encoding: 'utf8' })
	.toString()
	.split('\n');

const length = lines[0].length;

const zero = Array(length).fill(0);
const one = Array(length).fill(0);

for (const line of lines) {
	let bits = [...line];
	bits.forEach((bit, index) => {
		if (bit === '0') {
			zero[index]++;
		} else {
			one[index]++;
		}
	});
}

let sumMost = '';
let sumLeast = '';

for (let i = 0; i < length; i++) {
	if (one[i] < zero[i]) {
		sumMost += 1;
		sumLeast += 0;
	} else {
		sumMost += 0;
		sumLeast += 1;
	}
}

console.log(parseInt(+sumMost, 2) * parseInt(sumLeast, 2));
