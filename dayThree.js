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
// 	console.log(bits);

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

let C02 = [];
let Oxygen = [];

//we are doing the same thing, but the lines just change
let oxygenArr = [...lines];
let c02Arr = [...lines];

//this is for Oxygen
for (let i = 0; i < length; i++) {
	let one = 0;
	let zero = 0;
	if (oxygenArr.length > 1) {
		for (let j = 0; j < oxygenArr.length; j++) {
			if (oxygenArr[j][i] === '0') {
				zero += 1;
			} else {
				one += 1;
			}
		}
		console.log('Oxygen', { zero: zero, one: one });
		oxygenArr = oxygenArr.filter((el) => {
			if (one < zero && el[i] === '0') {
				return el;
			} else if (one >= zero && el[i] === '1') {
				return el;
			}
			// else if (one === zero && el[i] === '1') {
			// 	Oxygen = el;
			// 	return Oxygen;
			// }
		});
		Oxygen = oxygenArr;
		// if()
		//now we want to add up the 0 and 1s
	} else {
		Oxygen = oxygenArr;
	}
	console.log(Oxygen);
}

// this is for C02;

for (let c = 0; c < length; c++) {
	let one = 0;
	let zero = 0;

	if (c02Arr.length > 1) {
		for (let z = 0; z < c02Arr.length; z++) {
			if (c02Arr[z][c] === '0') {
				zero += 1;
			} else {
				one += 1;
			}
		}
		console.log('C02', { zero: zero, one: one });
		c02Arr = c02Arr.filter((el) => {
			if (zero <= one && el[c] === '0') {
				return el;
			} else if (one < zero && el[c] === '1') {
				return el;
			}
		});
		console.log(c02Arr);
		C02 = c02Arr;
	} else {
		C02 = c02Arr;
	}
}

console.log(Oxygen, C02);
console.log(parseInt(C02[0], 2) * parseInt(Oxygen[0], 2));
