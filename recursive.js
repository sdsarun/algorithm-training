//function sumArr(arr, n) {
//	if (n === 0) return 0;
//	if (n === 1) return arr[0];
//	return arr[n - 1] + sumArr(arr, n -1);
//}
//
//
//let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//console.log(sumArr(arr, arr.length));

//function binarySearch(arr, l, r, v) {
//	if (l > r) return -1;
//
//	m = Math.floor((l + r) * 0.5)
//
//	if (arr[m] === v) return m;
//	else if (arr[m] > v) return binarySearch(arr, l, m - 1, v);
//	else return binarySearch(arr, m + 1, r, v);
//}

//let arr = [];
//console.log(binarySearch(arr, 0, arr.length, 1));
function towerOfHanoi(n, src, aux, dest) {
	if (n === 1) {
		console.log(`move ${src} -> ${dest}`);
		return;
	}
	towerOfHanoi(n - 1, src, dest, aux);
	towerOfHanoi(1, src, aux, dest);
	towerOfHanoi(n - 1, aux, src, dest);
}


let n = 3;
let a = 'A';
let b = 'B';
let c = 'C';
towerOfHanoi(n, a, b, c);
