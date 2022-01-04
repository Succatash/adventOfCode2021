const fs = require('fs');

const lines = fs
	.readFileSync('text_files/dayThree.txt', { encoding: 'utf8' })
	.toString()
	.split('\n');

const length = lines[0].length;

// part 1

// const zero = Array(length).fill(0);
// const one = Array(length).fill(0);

// for (const line of lines) {
// 	let bits = [...line];
// 	bits.forEach((bit, index) => {
// 		if (bit === '0') {
// 			zero[index]++;
// 		} else {
// 			one[index]++;
// 		}
// 	});
// }
// let sumMost = '';
// let sumLeast = '';

// for (let i = 0; i < length; i++) {
// 	if (one[i] < zero[i]) {
// 		sumMost += 1;
// 		sumLeast += 0;
// 	} else {
// 		sumMost += 0;
// 		sumLeast += 1;
// 	}
// }

//part one answer
// console.log(parseInt(+sumMost, 2) * parseInt(sumLeast, 2));

//part 2 answer

let C02;
let Oxygen;

//we are doing the same thing, but the lines just change
let oxygenArr = [...lines];
//this is for Oxygen

for (let i = 0; i < length; i++) {
	const z = Array(length).fill(0);
	const o = Array(length).fill(0);
	for (const line of oxygenArr) {
		let bits = [...line];
		bits.forEach((bit, index) => {
			if (bit === '0') {
				z[index]++;
			} else {
				o[index]++;
			}
		});
	}

	if (oxygenArr.length > 1) {
		oxygenArr = oxygenArr.filter((el) => {
			if (o[i] <= z[i] && el[i] === '0') {
				return el;
			} else if (o[i] >= z[i] && el[i] === '1') {
				return el;
			}
		});

		Oxygen = oxygenArr;
	} else {
		return (Oxygen = oxygenArr);
	}
}

let C02arr = [...lines];

for (let i = 0; i < length; i++) {
	const d = Array(length).fill(0);
	const g = Array(length).fill(0);

	for (const line of C02arr) {
		let bits = [...line];
		bits.forEach((bit, index) => {
			if (bit === '0') {
				d[index]++;
			} else {
				g[index]++;
			}
		});
	}

	if (C02arr.length > 1) {
		C02arr = C02arr.filter((el) => {
			if (g[i] >= d[i] && el[i] === '0') {
				return el;
			} else if (g[i] <= d[i] && el[i] === '1') {
				return el;
			}
		});
	} else {
		C02 = C02arr;
		return C02[0];
	}
}
console.log('object');
console.log(C02[0], Oxygen[0]);
