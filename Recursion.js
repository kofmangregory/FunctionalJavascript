/* Task: 
* Implement Array#reduce using recursion.
*/

function reduce(arr, fn, initial) {
	if (arr.length) {
		initial = fn(initial, arr[0]);
		return reduce(arr.slice(1), fn, initial);
	}
	else {
		return initial;
	}
}

module.exports = reduce;