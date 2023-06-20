
let a = 12;
let b = 19;
let c = 4;


function solve(a, b, c) {
	let t = (b**2) + (-4 * a * c);
	if (t < 0) {
		console.log("No solution.");
		return;
	} else {
		t = Math.sqrt(t);
		let x1 = (-b + t) / (2 * a);
		let x2 = (-b - t) / (2 * a);
		console.log(x1);
		console.log(x2);
	}
}

solve(a, b, c);
