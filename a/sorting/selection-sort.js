const array = [2, 3, 1, 5, 9];
// 1, 2, 3, 5, 9


console.log(array);
selectionSort(array);

function selectionSort(array) {
	let sortedIndex = array.length - 1;

	while (sortedIndex >= 0) {
		// fint max index
		let maxIndex = 0;
		for (let i = 0; i <= sortedIndex; i++) {
			if (array[i] > array[maxIndex]) {
				maxIndex = i;
			}
		}

		// swap 
		[array[maxIndex], array[sortedIndex]] = [array[sortedIndex], array[maxIndex]];
		sortedIndex--;
	}
}
console.log(array);
