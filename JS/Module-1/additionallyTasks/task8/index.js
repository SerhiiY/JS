// Task 8
let num = Number.parseInt(Math.random() * 100);
let type;
if (num % 2 === 0) {
	type = 'even';
} else {
	type = 'odd';
}
console.log(`${num} is ${type}`);
