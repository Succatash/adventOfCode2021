const fs = require('fs');

const readMe = fs.readFileSync('dayTwo.txt').toString().split('\n');

let newArr = [];

for (i in readMe) {
	newArr.push(readMe[i].split(' '));
}

// this should equal 36

let horizontal = 0;
8;
let depth = 0;
4;
let aim = 0;

const startDive = (movement, num) => {
	switch (movement) {
		case 'forward':
			horizontal += +num;
			depth += aim * +num;
			break;

		case 'down':
			// depth += +num;
			aim += +num;
			break;

		case 'up':
			// depth -= +num;
			aim -= +num;
			break;
		default:
	}

	return {
		horizontal,
		depth,
		aim,
	};
};

let answer = newArr.map((el) => startDive(el[0], el[1]));

console.log(answer);

console.log(horizontal * depth);
